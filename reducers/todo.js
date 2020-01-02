import produce from 'immer';

export const initialState = {
  isAddingTodo: false,
  isAdded: false,
  maxNum : 2,
  todo: [
    {
      id: 1,
      content: "공부하기",
      isChange : 0
    },
    {
      id: 2,
      content: "운동하기",
      isChange : 0,
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

// 액션 생성함수 추가.
export const addTodoRequest = (newTodo) => {
  return {
    type : ADD_TODO_REQUEST,
    data : newTodo.trim()
  };
};

export const addTodoSuccess = ({data}) => {
  return {
    type : ADD_TODO_SUCCESS,
    data
  };
};

export const addTodoFailure = ({e}) => {
  return {
    type : ADD_TODO_FAILURE,
    error : e,
  }
}


export const deleteTodoRequest = (todoId) => {
  return {
    type : DELETE_TODO_REQUEST,
    data : todoId
  };
};

export const deleteTodoSuccess = ({data}) => {
  return {
    type : DELETE_TODO_SUCCESS,
    data,
  };
};

export const deleteTodoFailure = ({e}) => {
  return {
    type : DELETE_TODO_FAILURE,
    error : e
  };
};

export const upadteTodoRequest = ({todoId, content}) => {
  return {
    type : UPDATE_TODO_REQUEST,
    data : {
      id : todoId,
      content
    }
  };
};

export const updateTodoSuccess = ({data}) => {
  return {
    type : UPDATE_TODO_SUCCESS,
    data,
  };
};

export const updateTodoFailure = ({e}) => {
  return {
    type : UPDATE_TODO_FAILURE,
    error : e
  };
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO_REQUEST: {
//       return {
//         ...state,
//         isAddingTodo: true,
//         isAdded: false
//       };
//     }
//     case ADD_TODO_SUCCESS: {
//       return {
//         ...state,
//         isAddingTodo: false,
//         isAdded: true,
//         todo: [...state.todo, {id : state.maxNum + 1, content : action.data, isChange : false}],
//         maxNum : state.maxNum+1
//       };
//     }
//     case ADD_TODO_FAILURE: {
//       return state;
//     }
//     case UPDATE_TODO_REQUEST: {
//       return {
//         ...state,
//       };
//     }
//     case UPDATE_TODO_SUCCESS: {
//       const todo = state.todo.map(t => {
//           if(t.id === action.data.id){
//               t.content = action.data.content;
//               t.isChange = t.isChange === 0 ? 1 : 0
//           };
//           return t;
//       });
//       return {
//         ...state,
//         todo
//       };
//     }
//     case UPDATE_TODO_FAILURE: {
//       return state;
//     }
//     case DELETE_TODO_REQUEST: { 
//       return {
//           ...state,
//       }
//     }
//     case DELETE_TODO_SUCCESS: {
//       const todo = state.todo.filter(t => t.id !== action.data)
//       return {
//         ...state,
//         todo,
//       };
//     }
//     case DELETE_TODO_FAILURE: {
//       return state;
//     }
//     default:
//       return state;
//   }
// };


const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_TODO_REQUEST: {
        draft.isAddingTodo = true;
        draft.isAdded = false;
        break;
      }
      case ADD_TODO_SUCCESS: {
        draft.isAddingTodo = false;
        draft.isAdded = true;
        draft.todo.push({id: draft.maxNum + 1, content : action.data, isChange : 0});
        draft.maxNum += 1
        break;
      }
      case ADD_TODO_FAILURE: {
        break;
      }
      case UPDATE_TODO_REQUEST: {
        break;
      }
      case UPDATE_TODO_SUCCESS: {
        draft.todo.forEach(t => {
          if (t.id == action.data.id){
            t.content = action.data.content;
            t.isChange = t.isChange === 0 ? 1 : 0
          }
        })
        break;
      }
      case UPDATE_TODO_FAILURE: {
        break;
      }
      case DELETE_TODO_REQUEST: { 
        break;
      }
      case DELETE_TODO_SUCCESS: {
        draft.todo = draft.todo.filter(t => t.id !== action.data)
        break;
      }
      case DELETE_TODO_FAILURE: {
        break;
      }
      default:
        break;
    }
  })
};

export default reducer;
