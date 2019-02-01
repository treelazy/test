import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from './AddTodo';

const setup = (props) => {
  const enzymeWrapper = shallow(<AddTodo {...props} />);
  return {
    props,
    enzymeWrapper,
  };
};

describe('<AddTodo />', () => {
  const props = {
    clickHandler: jest.fn(),
  };
  const { enzymeWrapper } = setup(props);
  it('should ', () => {
    expect(enzymeWrapper.length).toBe(1);
  });
});
