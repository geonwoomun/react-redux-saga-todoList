import { delay, all, fork, takeLatest, put} from 'redux-saga/effects'
import { ADD_TODO_REQUEST, ADD_TODO_FAILURE, ADD_TODO_SUCCESS, 
    UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS, UPDATE_TODO_FAILURE,
DELETE_TODO_FAILURE, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS } from '../reducers/todo'

function* addTodo(action) {
    try {
        yield delay(1000);
        yield put({
            type : ADD_TODO_SUCCESS,
            data : action.data
        })
    }catch(e) {
        yield put({
            type: ADD_TODO_FAILURE,
            error: e
        });
        console.error(e)
    }
}
function* watchAdd() {
    yield takeLatest(ADD_TODO_REQUEST, addTodo)
}

function* updateTodo(action) {
    try {
        yield delay(1000);
        yield put({
            type : UPDATE_TODO_SUCCESS,
            data : action.data
        })
    }catch(e) {
        yield put({
            type: UPDATE_TODO_FAILURE,
            error: e
        });
        console.error(e)
    }
}
function* watchUpdate() {
    yield takeLatest(UPDATE_TODO_REQUEST, updateTodo)
}

function* deleteTodo() {
    try {
        yield delay(1000);
        yield put({
            type : DELETE_TODO_SUCCESS
        })
    }catch(e) {
        yield put({
            type: DELETE_TODO_FAILURE,
            error: e
        });
        console.error(e)
    }
}
function* watchDelete() {
    yield takeLatest(DELETE_TODO_REQUEST, deleteTodo)
}
export default function* todoSaga() {
    yield all([
        fork(watchAdd),
        fork(watchUpdate),
        fork(watchDelete)
    ])
}