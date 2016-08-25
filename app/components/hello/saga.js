import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { types } from './actions';

const {
  LOAD,
  LOADED,
} = types;

function* load() {
  return yield new Promise((resolve) => setTimeout(() => resolve('Hello!'), 2000));
}

function* loader() {
  const greeting = yield call(load);

  yield put({ type: LOADED, payload: { greeting } });
}

function* saga() {
  yield* takeLatest(LOAD, loader);
}

const sagas = [saga];
const workers = [loader];

export {
  sagas,
  workers,
};
