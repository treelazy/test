import reducer from './index';

const initState = {
  todos: [],
};

describe('reducer', () => {
  it('should ', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

  it('ADD_TODO', () => {
    const payload = {
      text: 111,
    };
    expect(
      reducer(initState, {
        type: 'ADD_TODO',
        payload,
      }),
    ).toEqual({
      ...initState,
      todos: [payload.text],
    });
  });
});
