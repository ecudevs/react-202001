import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PostList from "../Components/PostList";
import PostForm from "../Components/PostForm";
import { likePost } from "../actions/postActions";

// let posts = [];

function Home({
  loading,
  post,
  posts,
  getPosts,
  like,
  changePost,
  savePost,
  updatePost
}) {
  useEffect(() => {
    getPosts();
  }, []);

  const onLike = index => {
    like(posts, index);
  };

  const onSelect = index => {
    debugger;
    changePost(posts[index]);
  };

  const onSubmitPost = post => {
    if (!post._id) {
      savePost({
        ...post,
        usuario: { nombreUsuario: "thianlopezz", fotoUsuario: "foto" }
      });
    } else {
      debugger;
      updatePost({ ...post });
    }
  };

  // const mostrarLog = index => console.log(index);

  return (
    <div className="container">
      <PostForm
        loading={loading}
        post={post}
        onChange={changePost}
        onSubmit={onSubmitPost}
      />
      <PostList posts={posts} onLike={onSelect} />
    </div>
  );
}

const mapStateToProps = ({ postState }) => {
  return {
    loading: postState.loading,
    posts: postState.postFilter,
    post: postState.post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch({ type: "GET_POSTS" }),
    savePost: post => dispatch({ type: "POST_SAVE", post }),
    updatePost: post => dispatch({ type: "POST_UPDATE", post }),
    changePost: post => dispatch({ type: "POST_CHANGE", post }),
    like: (posts, index) => {
      return likePost(dispatch, posts, index);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
