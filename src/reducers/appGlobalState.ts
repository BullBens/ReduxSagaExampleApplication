import {takeLatest, put, select} from 'redux-saga/effects';
import {TGlobalState} from '@types';

const INCREMENT_GLOBAL_STATE = '[appGlobalState] INCREMENT_GLOBAL_STATE';
const DECREMENT_GLOBAL_STATE = '[appGlobalState] DECREMENT_GLOBAL_STATE';
const SET_COUNTER_GLOBAL_STATE = '[appGlobalState] SET_COUNTER_GLOBAL_STATE';

const RESET_APP_GLOBAL_STATE = '[appGlobalState] RESET_APP_GLOBAL_STATE';

const initialstate = {
  counter: 0,
};

export default (state = initialstate, action: any) => {
  switch (action.type) {
    case SET_COUNTER_GLOBAL_STATE:
      return Object.assign({}, {...state, counter: action.data});
    case RESET_APP_GLOBAL_STATE:
      return initialstate;
    default:
      return state;
  }
};

//
export const incrementAppGlobalState = (data: number) => ({
  data,
  type: INCREMENT_GLOBAL_STATE,
});
export const decrementAppGlobalState = (data: number) => ({
  data,
  type: DECREMENT_GLOBAL_STATE,
});
export const setCounterAppGlobalState = (data: number) => ({
  data,
  type: SET_COUNTER_GLOBAL_STATE,
});
export const resetAppGlobalState = () => ({type: RESET_APP_GLOBAL_STATE});

//

export function* watchAppGlobalState() {
  yield takeLatest(INCREMENT_GLOBAL_STATE, changeIncrementAppGlobalStateAsync);
  yield takeLatest(DECREMENT_GLOBAL_STATE, changeDecrementAppGlobalStateAsync);
}

//

export function* changeIncrementAppGlobalStateAsync(action: any) {
  const {counter} = yield select((state: TGlobalState) => state.appGlobalState);
  let {data} = action;
  data += 1;
  yield put(setCounterAppGlobalState(data));
}
export function* changeDecrementAppGlobalStateAsync(action: any) {
  let {data} = action;
  data -= 1;
  yield put(setCounterAppGlobalState(data));
}
