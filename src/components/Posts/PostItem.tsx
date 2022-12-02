import React from 'react';
import {Post} from "../../types";

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = ({post}) => {
  return (
    <div className="card mb-2">
      <div className="card-header">здесь будет дата</div>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.description}</p>
        <button className="btn btn-primary">Read more</button>
      </div>
    </div>
  );
};

export default PostItem;