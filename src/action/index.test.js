import configureMockStore from 'redux-mock-store';
import {
  createEpicMiddleware,
  // combineEpics,
  // ActionsObservable,
} from 'redux-observable';
// import httpAdapter from 'axios/lib/adapters/http';
// import axios from 'axios';
import nock from 'nock';
import { of } from 'rxjs';

// import { Observable } from 'rxjs';
import { actions, Epics } from './index';

// const host = 'http://localhost';

// axios.defaults.host = host;
// axios.defaults.adapter = httpAdapter;

// const rootEpic = combineEpics(...Object.values(Epics));

describe('Epics test', () => {
  let store;
  beforeEach(() => {
    nock.cleanAll();
    const epicMiddleware = createEpicMiddleware();
    const mockStore = configureMockStore([epicMiddleware]); // 創建包含middleware的mock store
    store = mockStore();
    epicMiddleware.run(Epics.fetchUserEpic);
  });
  it('fetch SUCCESS:', async () => {
    const res = {
      errorcode: 200,
      message: '操作成功',
      data: { isLogin: true },
    };
    const payload = res.data;

    nock('https://hidden-lowlands-59931.herokuapp.com')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('/games')
      .reply(200, res);
    // console.log(actions.fetchUser());
    const action$ = of(actions.fetchUser()); // 建立mock action
    // console.log(action$);
    const epic$ = Epics.fetchUserEpic(action$); // 使用mock action呼叫epic
    // console.log(epic$);
    // console.log(epic$ instanceof Observable);
    // const result = await epic$.pipe(toArray()).toPromise(); // 取得異步http請求結果
    const result = await epic$.toPromise();
    // const result = await epic$.toArray().toPromise();
    console.log(result, actions.fetchUserFulfilled(res));
    expect(result).toEqual(actions.fetchUserFulfilled(res.data));
  });
});
