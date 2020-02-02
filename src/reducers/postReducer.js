let auxPost = [];

let defaultState = {
  loading: false,
  post: {},
  posts: auxPost,
  postFilter: auxPost
};

function replaceArray(state, post) {
  debugger;
  let index = state.findIndex(x => x._id === post._id);
  let arr = Object.assign([], state);
  arr[index] = post;
  return arr;
}

const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "POST_CHANGE":
      return { ...state, post: { ...action.post } };
    case "POST_SAVE":
      return { ...state, loading: true };
    case "POST_SAVE_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.post],
        postFilter: [...state.posts, action.post]
      };
    case "POST_UPDATE":
      return { ...state, loading: true };
    case "POST_UPDATE_SUCCESS":
      debugger;
      return {
        ...state,
        loading: false,
        posts: replaceArray(state.posts, action.post),
        postFilter: replaceArray(state.posts, action.post)
      };
    case "GET_POSTS":
      return { ...state, loading: true };
    case "GET_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: [...action.posts],
        postFilter: [...action.posts]
      };
    case "POSTS_UPDATE":
      return { ...state, posts: [...action.posts] };
    case "POSTS_FILTER_UPDATE":
      return { ...state, postFilter: [...action.posts] };
    default:
      return { ...state };
  }
};
export default postReducer;
