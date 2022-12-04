import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {PostApi} from "../../types";
import axiosApi from "../../axiosApi";
import PostForm from "../../components/PostForm/PostForm";
import Spinner from "../../components/Spinner/Spinner";

const EditPost = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostApi | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchOnePost = useCallback(async () => {
    try {
      setLoading(true);
      const postResponse = await axiosApi.get<PostApi>('/posts/' + id + '.json');
      setPost(postResponse.data);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    void fetchOnePost();
  }, [fetchOnePost]);

  const updatePost = async (post: PostApi) => {
    try {
      setLoading(true);
      await axiosApi.put('/posts/' + id + '.json', post);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row mt-2">
      {loading ? <Spinner/> : (
        <div className="col">
          {post && (
            <PostForm onSubmit={updatePost} existingPost={post} loading={loading}/>
          )}
        </div>
        )
      }
    </div>
  );
};

export default EditPost;