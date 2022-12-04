import React, {useCallback, useEffect, useState} from 'react';
import Posts from "../../components/Posts/Posts";
import Spinner from "../../components/Spinner/Spinner";
import {Post, PostList} from "../../types";
import axiosApi from "../../axiosApi";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const postsResponse = await axiosApi.get<PostList>('/posts.json');

      const posts = Object.keys(postsResponse.data).map(key => {
        const post = postsResponse.data[key];
        post.id = key;
        return post;
      });

      setPosts(posts);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts().catch(console.error);
  }, [fetchPosts]);

  return (
    <div>
      {loading ? <Spinner/> : (
        <Posts posts={posts}/>
      )}
    </div>
  );
};

export default Home;