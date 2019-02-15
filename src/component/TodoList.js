import React from 'react';
import './style.scss';

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
          className="button"
        >
          delete
        </button>
      </div>
    ))}
  </ul>
);

export default TodoList;
