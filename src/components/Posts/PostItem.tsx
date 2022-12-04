import React from 'react';
import {Post} from "../../types";
import {Link} from "react-router-dom";

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = ({post}) => {
  return (
    <div className="card mb-2">
      <div className="card-header text-secondary">{post.date}</div>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.description}</p>
        <Link to={`/posts/${post.id}/edit`} className="btn btn-primary">Read more</Link>
      </div>
    </div>
  );
};

export default PostItem;