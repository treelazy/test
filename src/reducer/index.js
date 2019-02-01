const initState = {
  todos: [],
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
    default:
      return state;
  }
};
export default toDoReducer;
