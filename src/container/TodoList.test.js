import React from 'react';
import { shallow } from 'enzyme';
import confogureStore from 'redux-mock-store';
import ToDoList from './TodoList';

const mockStore = confogureStore();

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};

const initState = {
  todos: 1,
};

describe('ToDoList container', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore(initState);
    store.dispatch = jest.fn();
    wrapper = shallowWithStore(<ToDoList />, store);
  });
  describe('mapStateToProps', () => {
    it('todos ', () => {
      expect(wrapper.props.todos).toEqual();
    });
  });

  describe('mapDispatchtoProps', () => {
    it('clickDel', () => {
      wrapper.props().clickDel(1);
      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'DELETE_TODO',
        payload: { index: 1 },
      });
    });
  });
});
