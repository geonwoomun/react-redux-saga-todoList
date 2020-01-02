import { delay, all, fork, takeLatest, put} from 'redux-saga/effects'
import { ADD_TODO_REQUEST, UPDATE_TODO_REQUEST, DELETE_TODO_REQUEST, addTodoSuccess, addTodoFailure, updateTodoSuccess, updateTodoFailure, deleteTodoRequest, deleteTodoSuccess, deleteTodoFailure } from '../reducers/todo'

function* addTodo(action) {
    try {
        yield delay(1000);
        yield put(addTodoSuccess({data : action.data}));
    }catch(e) {
        yield put(addTodoFailure({e}));
        console.error(e)
    }
}
function* watchAdd() {
    yield takeLatest(ADD_TODO_REQUEST, addTodo)
}

function* updateTodo(action) {
    try {
        yield delay(1000);
        yield put(updateTodoSuccess({data: action.data}))
    }catch(e) {
        yield put(updateTodoFailure({e}));
        console.error(e)
    }
}
function* watchUpdate() {
    yield takeLatest(UPDATE_TODO_REQUEST, updateTodo)
}

function* deleteTodo(action) {
    try {
        yield delay(1000);
        yield put(deleteTodoSuccess({data: action.data}))
    }catch(e) {
        yield put(deleteTodoFailure({e}));
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