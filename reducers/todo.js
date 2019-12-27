export const initialState = {
  isAddingTodo: false,
  isAdded: false,
  maxNum : 2,
  todo: [
    {
      id: 1,
      content: "공부하기",
      isUpdated : false,
      isDeleted : false,
    },
    {
      id: 2,
      content: "운동하기",
      isUpdated : false,
      isDeleted : false,
    }
  ],
};

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
  switch (action.type) {
    case ADD_TODO_REQUEST: {
      return {
        ...state,
        isAddingTodo: true,
        isAdded: false
      };
    }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        isAddingTodo: false,
        isAdded: true,
        todo: [...state.todo, {id : state.maxNum + 1, content : action.data, isUpdated:false, isDeleted : false}],
        maxNum : state.maxNum+1
      };
    }
    case ADD_TODO_FAILURE: {
      return state;
    }
    case UPDATE_TODO_REQUEST: {
      const todo = state.todo.map((t) => {
        if(t.id == action.data.id){
          t.isUpdated = true
        }
        return t;
      })
      return {
        ...state,
        todo
      };
    }
    case UPDATE_TODO_SUCCESS: {
      const todo = state.todo.map(t => {
          if(t.id === action.data.id){
              t.content = action.data.content,
              t.isUpdated = false
          };
          return t;
      });
      return {
        ...state,
        todo
      };
    }
    case UPDATE_TODO_FAILURE: {
      return state;
    }
    case DELETE_TODO_REQUEST: {
      const todo = state.todo.map((t) => {
        if(t.id == action.data){
          t.isDeleted = true
        }
        return t;
      })
      return {
          ...state,
          todo
      }
    }
    case DELETE_TODO_SUCCESS: {
      const todo = state.todo.filter(t => t.id !== action.data)
      return {
        ...state,
        todo,
      };
    }
    case DELETE_TODO_FAILURE: {
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
