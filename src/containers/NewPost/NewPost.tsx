import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";
import PostForm from "../../components/PostForm/PostForm";
import {PostApi} from "../../types";

const NewPost = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const createPost = async (post: PostApi) => {
    try {
      setLoading(true);
      await axiosApi.post('/posts.json', post);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row mt-2">
      <div className="col">
        <PostForm onSubmit={createPost} loading={loading}/>
      </div>
    </div>
  );
};

export default NewPost;