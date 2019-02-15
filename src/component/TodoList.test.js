import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './TodoList';

const setup = (props) => {
  const enzymeWrapper = shallow(<TodoList {...props} />);
  return {
    props,
    enzymeWrapper,
  };
};

describe('<TodoList />', () => {
  const props = {
    clickDel: jest.fn(),
    todos: ['a', 'b'],
  };
  const { enzymeWrapper } = setup(props);
  it('should ', () => {
    expect(enzymeWrapper.length).toBe(1);
  });
});
