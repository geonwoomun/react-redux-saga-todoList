import { combineReducers } from 'redux';
import todo from './todo';
import test from './test'

const rootReducer = combineReducers({
    todo,
    test
})

export default rootReducer;