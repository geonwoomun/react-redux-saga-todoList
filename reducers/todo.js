export const initialState = {
    isAddingTodo : false,
    isAdded : false,
    todo : [
        "공부하기",
        "운동하기"
    ],
}

export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";
export const UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_FAILURE = "UPDATE_TODO_FAILURE";
export const DELETE_TODO_REQUEST = "DELTE_TODO_REQUEST";
export const DELETE_TODO_SUCCESS = "DELTE_TODO_SUCCESS";
export const DELETE_TODO_FAILURE = "DELTE_TODO_FAILURE";

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO_REQUEST : {
            return {
                ...state,
                isAddingTodo : true,
                isAdded : false,
            }
        }
        case ADD_TODO_SUCCESS : {
            return {
                ...state,
                isAddingTodo : false,
                isAdded: true,
                todo : [...state.todo, action.data]
            }
        }
        case ADD_TODO_FAILURE : {
            return state;
        }
        case UPDATE_TODO_REQUEST : {
            return {
                ...state,
            }
        }
        case UPDATE_TODO_SUCCESS : {
            return {
                ...state,
            }
        }
        case UPDATE_TODO_FAILURE : {
            return {
                ...state,
            }
        }
        case DELETE_TODO_REQUEST : {
            return {
                ...state,
            }
        }
        case DELETE_TODO_SUCCESS : {
            return {
                ...state,
            }
        }
        case DELETE_TODO_FAILURE : {
            return {
                ...state,
            }
        }
        default : 
            return state;
    }
}

export default reducer;