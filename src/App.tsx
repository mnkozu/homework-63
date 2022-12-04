import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import NewPost from "./containers/NewPost/NewPost";
import EditPost from "./containers/EditPost/EditPost";
import PostItem from "./components/Posts/PostItem";

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path={'/'} element={(
            <Home/>
          )}/>
          <Route path={'/posts/:id'} element={(
            <PostItem />
          )}/>
          <Route path={'/posts/add'} element={(
            <NewPost/>
          )}/>
          <Route path={'/posts/:id/edit'} element={(
            <EditPost/>
          )}/>
          <Route path="*" element={(
            <h1>Not found!</h1>
          )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
