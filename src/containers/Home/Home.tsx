import React from 'react';
import Posts from "../../components/Posts/Posts";
import Spinner from "../../components/Spinner/Spinner";
import {Post} from "../../types";

interface Props {
  posts: Post[];
  postsLoading: boolean;
}

const Home: React.FC<Props> = ({posts, postsLoading}) => {
  return (
    <div>
      {postsLoading ? <Spinner/> : (
        <Posts posts={posts}/>
      )}
    </div>
  );
};

export default Home;