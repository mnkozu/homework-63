import React, {useState} from 'react';
import {PostApi} from "../../types";
import Spinner from "../Spinner/Spinner";

interface Props {
  onSubmit: (post: PostApi) => void;
  existingPost?: PostApi;
  loading: boolean;
}

const PostForm: React.FC<Props> = ({onSubmit, existingPost, loading}) => {
  const [post, setPost] = useState(existingPost ? existingPost : {
    title: '',
    description: '',
    date: '',
  });

  const onPostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setPost(prev => ({
      ...prev,
      [name]: value,
      date: Date(),
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
  };

  return (
    <>
      {loading ? <Spinner/> : (
        <form onSubmit={onFormSubmit}>
          <h4>{existingPost ? 'Edit post' : 'Add new post'}</h4>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title" name="title" type="text"
              className="form-control"
              required
              value={post.title}
              onChange={onPostChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description" name="description"
              required
              className="form-control"
              value={post.description}
              onChange={onPostChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {existingPost ? 'Save edit' : 'Add'}
          </button>
        </form>
      )}
    </>
  );
};

export default PostForm;