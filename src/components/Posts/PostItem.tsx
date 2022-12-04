import React, {useCallback, useEffect, useState} from 'react';
import {PostApi} from "../../types";
import {Link, Outlet, useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import Spinner from "../Spinner/Spinner";

const PostItem = () => {
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

  const deletePost = useCallback(async () => {
    try {
      setLoading(true);
      await axiosApi.delete('posts/' + id + '.json');
      navigate('/');
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

   let postItem;
   if (loading) {return <Spinner/>}
   if (post) {
     postItem = (
       <div className="col-5">
         <h4 className="m-2">Clicked Post</h4>
         <div className="card mb-2">
           <div className="card-header text-secondary">{post.date}</div>
           <div className="card-body">
             <h5 className="card-title">{post.title}</h5>
             <p className="card-text">{post.description}</p>
             <Link to={`/posts/${id}/edit`} className="btn btn-primary m-1">Edit</Link>
             <button onClick={deletePost} className="btn btn-primary m-1">Delete</button>
           </div>
           <Outlet/>
         </div>
       </div>
     );
   }


  return (
    <>
      {postItem}
    </>
  );
};

export default PostItem;