import { ofType } from 'redux-observable';
import axios from 'axios';
import {
  mergeMap, catchError, tap, map,
} from 'rxjs/operators';
import { from } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const fetchUserFulfilled = payload => ({
  type: 'FETCH_USER_FULFILLED',
  payload,
});
const fetchUser = () => ({ type: 'FETCH_USER' });
export const actions = {
  fetchUserFulfilled,
  fetchUser,
};

const fetchUserEpic = action$ => action$.pipe(
  ofType('FETCH_USER'),
  tap(r => console.log(r)),
  mergeMap(() => ajax.getJSON('https://hidden-lowlands-59931.herokuapp.com/games').pipe(
    tap(response => console.log(response.data)),
    map(response => actions.fetchUserFulfilled(response.data)),
    catchError(error => console.log(error)),
  )),
);
export const Epics = { fetchUserEpic };
