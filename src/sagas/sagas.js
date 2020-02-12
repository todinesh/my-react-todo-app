import { put, takeEvery, all, call, select } from 'redux-saga/effects'
import { LOAD_TODO_LIST, RENDER_TODO_LIST, SAVE_TODO_LIST } from '../actions/actionsTypes';

//TODO worker saga for data load
export function* fetchToDoList() {
  const GET_TODO_URL = 'http://localhost:3001/todos';
  const response = yield call(fetch, GET_TODO_URL);
  const data = yield response.json();
  console.log('data is '+ JSON.stringify(data))
  yield put({ type: RENDER_TODO_LIST, data });
}

//TODO watcher saga for data load
function* loadToDoList() {
  yield takeEvery(LOAD_TODO_LIST, fetchToDoList);
}

//watcher saga for save
function* saveToDoList() {
  yield takeEvery(SAVE_TODO_LIST, saveToDo);
}

//TODO worker saga for save
export function* saveToDo() {
  const state = yield select();
  const data = state.todos;
  console.log("saving data "+JSON.stringify(state.todos))
  const endpoint = 'http://localhost:3001/todos';
  const response = yield call(fetch,endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
  }); 
  const resData = yield response.json();
  console.log("data saved "+JSON.stringify(resData))
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
      loadToDoList(),
      saveToDoList()
    ])
}