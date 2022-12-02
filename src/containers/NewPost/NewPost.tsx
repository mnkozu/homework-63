import React from 'react';
import {useNavigate} from "react-router-dom";
import axiosApi from "../../axiosApi";
import PostForm from "../../components/PostForm/PostForm";
import {PostApi} from "../../types";

const NewPost = () => {
  const navigate = useNavigate();

  const createPost = async (post: PostApi) => {
    try {
      await axiosApi.post('/posts.json', post);
      navigate('/');
    } finally {

    }
  };

  return (
    <div className="row mt-2">
      <div className="col">
        <PostForm onSubmit={createPost}/>
      </div>
    </div>
  );
};

export default NewPost;