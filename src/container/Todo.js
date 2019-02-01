import { connect } from 'react-redux';
import Todo from '../component/AddTodo';
import actions from '../action';

const mapStateToProps = () => ({
  // active: ownProps.filter === state.visibilityFilter  //component 去store 抓取資料
});

const mapDispatchToProps = dispatch => ({
  clickHandler: (text) => {
    dispatch(actions.addTodo(text));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo);
