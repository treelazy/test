import { connect } from 'react-redux';
import AddTodo from '../component/AddTodo';
import { actions } from '../action';

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  // clickHandler: (text) => {
  //   dispatch(actions.addTodo(text));
  // },
  getData: () => {
    dispatch(actions.fetchUser());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTodo);
