import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Todo from './Todo';

const mockStore = configureStore();
const shallowWithStore = (component, store) => {
  // 將store綁定
  const context = {
    store,
  };
  return shallow(component, { context });
};
const initState = {};

describe('Notice container', () => {
  let wrapper;
  let store;
  beforeEach(() => {
    store = mockStore(initState);
    store.dispatch = jest.fn();
    wrapper = shallowWithStore(<Todo />, store);
  });
  describe('mapDispatchtoProps', () => {
    it('clickHandler', () => {
      wrapper.props().clickHandler(1);
      expect(store.dispatch).toHaveBeenCalledWith({
        type: 'ADD_TODO',
        payload: { text: 1 },
      });
    });
  });
});
