import { connect } from 'react-redux';
import ToDoList from '../component/TodoList';
import actions from '../action';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  clickDel: (text) => {
    dispatch(actions.delTodo(text));
  },
  clickEdit: (text) => {
    dispatch(actions.editTodo(text));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoList);
