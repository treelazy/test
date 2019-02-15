const initState = {
  todos: [],
  data: [],
};
const toDoReducer = (state = initState, action) => {
  const newtodos = [...state.todos];
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload.text],
      };
    case 'DELETE_TODO':
      newtodos.splice(action.payload.index, 1);
      return {
        ...state,
        todos: newtodos,
      };
    case 'FETCH_USER':
      return state;
    case 'FETCH_USER_FULFILLED':
      console.log(action.payload);
      return {
        ...state,
        data: [action.payload],
      };
    default:
      return state;
  }
};
export default toDoReducer;
