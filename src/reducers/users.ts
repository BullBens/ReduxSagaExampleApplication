import {takeLatest, put, call, select} from 'redux-saga/effects';
import {httpGet} from '@services';
import {urls} from '@constants';

const GET_USERS = '[users] GET_USERS';
const SET_USERS = '[users] SET_USERS';
const RESET_USERS = '[users] RESET_USERS';

const initialstate = null;

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case SET_USERS:
      return action.data;
    case RESET_USERS:
      return initialstate;
    default:
      return state;
  }
};

export const getUsers = () => ({type: GET_USERS});
export const setUsers = (data: any) => ({data, type: SET_USERS});
export const resetUsers = () => ({type: RESET_USERS});

export function* watchUsers() {
  yield takeLatest(GET_USERS, getUsersAsync);
}

export function* getUsersAsync() {
  try {
    const {data} = yield call(() => httpGet(urls.users, {}));
    yield put(setUsers(data.result));
  } catch (e) {
    console.log(e, 'getUsersAsync ERROR');
  }
}
