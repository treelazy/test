import React from 'react';

const TodoList = ({ todos, clickDel }) => (
  <ul>
    {todos.map((todo, ind) => (
      <div key={ind}>
        <li key={ind}>{todo}</li>
        <button
          type="button"
          onClick={() => {
            clickDel(ind);
          }}
        >
          delete
        </button>
      </div>
    ))}
  </ul>
);

export default TodoList;
