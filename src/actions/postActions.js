export function likePost(dispatch, posts, index) {
  posts[index].liked = true;
  dispatch({ type: "POSTS_UPDATE", posts });
}

export function filterPost(dispatch, posts, text) {
  posts = posts.filter(
    postItem =>
      postItem.pieDeFoto.toUpperCase().indexOf(text.toUpperCase()) != -1
  );

  dispatch({ type: "POSTS_FILTER_UPDATE", posts });
}
