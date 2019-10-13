import { put, call, takeLatest, all } from "redux-saga/effects";
import { coreAPI } from "../../utils/request";
import { FETCH_JOBITEMS, DELETE_JOBITEMS, CREATE_JOBITEMS } from "./constants";
import {
  fetchJobItemsFail,
  fetchJobItemsSuccess,
  deleteJobItemSuccess,
  createJobItemSuccess
} from "./actions";

export function* fetchJobItems() {
  try {
    const Data = yield call(coreAPI.get, `/jobitems`);
    yield put(fetchJobItemsSuccess(Data));
  } catch (err) {
    yield put(fetchJobItemsFail());
  }
}

export function* deleteJobItem({ id }) {
  try {
    const Data = yield call(coreAPI.delete, `/jobitems/${id}`);
    yield put(deleteJobItemSuccess(id));
  } catch (err) {
    yield put(fetchJobItemsFail());
  }
}

export function* createJobItem({ data }) {
  try {
    const Data = yield call(coreAPI.post, `/jobitems/`, {
      jobId: data[0],
      side: data[1],
      inputUrl: data[2],
      outputUrl: data[3],
      status: data[4]
    });
    yield put(createJobItemSuccess(Data));
  } catch (err) {
    yield put(fetchJobItemsFail());
  }
}

export function* watchFetchJobItems() {
  yield takeLatest(FETCH_JOBITEMS, fetchJobItems);
}

export function* watchDeleteJobItem() {
  yield takeLatest(DELETE_JOBITEMS, deleteJobItem);
}

export function* watchCreateJobItem() {
  yield takeLatest(CREATE_JOBITEMS, createJobItem);
}

export default function* watchAll() {
  yield all([watchFetchJobItems(), watchDeleteJobItem(), watchCreateJobItem()]);
}
