import React from 'react';
import {Post} from "../../types";
import {NavLink} from "react-router-dom";

interface Props {
  posts: Post[];
}

const Posts: React.FC<Props> = ({posts}) => {
  return (
    <div className="px-4">
     <h3 className="py-2">Posts</h3>
      {posts.map((post) => (
        <div className="card mb-2" key={post.id}>
          <div className="card-header text-secondary">{post.date}</div>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.description}</p>
            <NavLink to={`/posts/${post.id}`} className="btn btn-primary">Read more</NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;