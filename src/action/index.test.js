import configureMockStore from 'redux-mock-store';
import {
  createEpicMiddleware,
  // combineEpics,
  ActionsObservable,
} from 'redux-observable';
import httpAdapter from 'axios/lib/adapters/http';
import axios from 'axios';
import nock from 'nock';

import { Observable } from 'rxjs';
import { actions, Epics } from './index';

const host = 'http://localhost';
// const rootEpic = combineEpics(...Object.values(Epics));
axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;
describe('Epics test', () => {
  let store;
  beforeEach(() => {
    nock.cleanAll();
    const epicMiddleware = createEpicMiddleware();
    const mockStore = configureMockStore([epicMiddleware]); // 創建包含middleware的mock store
    store = mockStore();
  });
  it('fetch SUCCESS:', async () => {
    nock.cleanAll();
    const epicMiddleware = createEpicMiddleware();
    const mockStore = configureMockStore([epicMiddleware]); // 創建包含middleware的mock store
    store = mockStore();
    epicMiddleware.run(Epics.fetchUserEpic);
    const res = {
      errorcode: 200,
      message: '操作成功',
      data: { isLogin: true },
    };
    const payload = res.data;

    nock('https://hidden-lowlands-59931.herokuapp.com')
      .get('/games')
      .reply(200, res);
    // console.log(actions.fetchUser());
    const action$ = ActionsObservable.of(actions.fetchUser()); // 建立mock action
    console.log(action$);
    const epic$ = Epics.fetchUserEpic(action$); // 使用mock action呼叫epic
    console.log(epic$ instanceof Observable);
    // const result = await epic$.pipe(toArray()).toPromise(); // 取得異步http請求結果
    // const result = epic$.toPromise().then(results => console.log(results));
    const result = await epic$.toArray().toPromise();
    expect(result).toEqual([actions.fetchUserFulfilled(payload)]);
  });
});
