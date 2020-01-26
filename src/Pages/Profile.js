import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PostList from "../Components/PostList";
import { likePost } from "../actions/postActions";

// let posts = [];

function Profile({ loading, posts, getPosts, like }) {
  return (
    <div className="container">
      <ul>
        {posts.map((item, index) => (
          <li key={item.pieDeFoto} onClick={() => like(posts, index)}>
            {item.pieDeFoto}{" "}
            <span style={{ color: "red" }}>
              {item.liked !== undefined ? "Liked" : "No liked"}
            </span>
          </li>
        ))}
      </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
