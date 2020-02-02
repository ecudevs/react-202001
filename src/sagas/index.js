import { takeLatest } from "redux-saga/effects";
import { getPostSaga, savePostSaga, updatePostSaga } from "./postSaga";

export default function* watcherSaga() {
  yield takeLatest("GET_POSTS", getPostSaga);
  yield takeLatest("POST_SAVE", savePostSaga);
  yield takeLatest("POST_UPDATE", updatePostSaga);
}
