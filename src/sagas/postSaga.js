import { call, put } from "redux-saga/effects";

const savePost = async post => {
  try {
    let response = await fetch("http://localhost:9000/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json"
      }
    });
    let data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async post => {
  try {
    let response = await fetch("http://localhost:9000/posts", {
      method: "PUT",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json"
      }
    });
    let data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getPosts = async () => {
  try {
    let response = await fetch("http://localhost:9000/posts");
    let data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export function* getPostSaga() {
  const data = yield call(getPosts);
  yield put({ type: "GET_POSTS_SUCCESS", posts: data.posts });
}

export function* savePostSaga(action) {
  const data = yield call(savePost, action.post);
  yield put({ type: "POST_SAVE_SUCCESS", post: data.post });
  yield put({ type: "POST_CHANGE", post: {} });
}

export function* updatePostSaga(action) {
  const data = yield call(updatePost, action.post);
  debugger;
  yield put({ type: "POST_UPDATE_SUCCESS", post: data.post });
  yield put({ type: "POST_CHANGE", post: {} });
}
