const actions = {
  addTodo: text => ({
    type: 'ADD_TODO',
    payload: {
      text,
    },
  }),
  delTodo: index => ({
    type: 'DELETE_TODO',
    payload: {
      index,
    },
  }),
};

export default actions;
