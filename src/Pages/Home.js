import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PostList from "../Components/PostList";
import { likePost } from "../actions/postActions";

// let posts = [];

function Home({ loading, posts, getPosts, like }) {
  const onLike = index => {
    debugger;
    like(posts, index);
  };

  return (
    <div className="container">
      <PostList posts={posts} onLike={onLike} />
    </div>
  );
}

const mapStateToProps = ({ postState }) => {
  return {
    loading: postState.loading,
    posts: postState.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch({ type: "GET_POSTS" }),
    like: (posts, index) => {
      return likePost(dispatch, posts, index);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
