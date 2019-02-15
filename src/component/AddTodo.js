import React, { Component } from 'react';

class AddTodo extends Component {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  addEvent(input) {
    const { clickHandler } = this.props;
    clickHandler(input);
  }

  render() {
    let input;
    // const { data } = this.props;
    return (
      <div>
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="button" onClick={() => this.addEvent()}>
          add
        </button>
      </div>
    );
  }
}

// const AddTodo = ({ clickHandler }) => {
//   let input;
//   const addEvent = () => {
//     clickHandler(input.value);
//     input.value = '';
//   };
//   return (
//     <div>
//       <input
//         ref={(node) => {
//           input = node;
//         }}
//       />
//       <button type="button" onClick={() => addEvent()}>
//         add
//       </button>
//     </div>
//   );
// };

export default AddTodo;
