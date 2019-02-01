import React from 'react';

const AddTodo = ({ clickHandler }) => {
  let input;
  const addEvent = () => {
    clickHandler(input.value);
    input.value = '';
  };
  return (
    <div>
      <input
        ref={(node) => {
          input = node;
        }}
      />
      <button type="button" onClick={() => addEvent()}>
        add
      </button>
    </div>
  );
};

export default AddTodo;
