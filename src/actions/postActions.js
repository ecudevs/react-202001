export function likePost(dispatch, posts, index) {
  debugger;
  posts[index].liked = true;
  dispatch({ type: "POSTS_UPDATE", posts });
}
