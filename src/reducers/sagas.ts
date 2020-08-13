import {all} from 'redux-saga/effects';
// ADD IMPORT
import { watchUsers } from './users'
import {watchAppGlobalState} from './appGlobalState';

export default function* rootSaga() {
  yield all([
    watchAppGlobalState(),
    // ADD WATCHER
		watchUsers(),
  ]);
}
