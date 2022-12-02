import React, {useState} from 'react';
import {PostApi} from "../../types";

interface Props {
  onSubmit: (post: PostApi) => void;
}

const PostForm: React.FC<Props> = ({onSubmit}) => {
  const [post, setPost] = useState<PostApi>({
    title: '',
    description: '',
  });

  const onPostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;

    setPost(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add post</h4>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title" name="title" type="text"
          className="form-control"
          value={post.title}
          onChange={onPostChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description" name="description"
          className="form-control"
          value={post.description}
          onChange={onPostChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Create</button>
    </form>
  );
};

export default PostForm;