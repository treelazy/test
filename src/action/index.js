import { ofType } from 'redux-observable';
import axios from 'axios';
import {
  mergeMap, catchError, tap, map,
} from 'rxjs/operators';
import { from } from 'rxjs';

export const actions = {
  addTodo: text => ({
    type: 'ADD_TODO',
    payload: {
      text,
    },
  }),
  delTodo: index => ({
    type: 'DELETE_TODO',
    payload: {
      index,
    },
  }),
  fetchUserFulfilled: payload => ({
    type: 'FETCH_USER_FULFILLED',
    payload,
  }),
  fetchUser: () => ({ type: 'FETCH_USER' }),
};

const fetchUserEpic = action$ => action$.pipe(
  ofType('FETCH_USER'),
  tap(r => console.log(r)),
  mergeMap(() => from(axios.get('https://hidden-lowlands-59931.herokuapp.com/games')).pipe(
    tap(response => console.log(response.data)),
    map(response => actions.fetchUserFulfilled(response)),
    catchError(error => console.log(error)),
  )),
);
// action$.pipe(
//   ofType('FETCH_USER'),
//   tap(() => console.log('test')),
//   mergeMap(() => from(axios.get('https://hidden-lowlands-59931.herokuapp.com/games')).pipe(
//     tap(response => console.log(response)),
//     mergeMap(response => of(actions.fetchUserFulfilled(response))),
//     catchError(error => console.log(error)),
//   )),
// );
export const Epics = { fetchUserEpic };
