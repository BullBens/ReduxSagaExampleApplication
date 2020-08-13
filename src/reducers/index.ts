import {combineReducers} from 'redux';

export default combineReducers({
  appGlobalState: require('./appGlobalState').default,
  users: require('./users').default,
  // ADD NEW REDUCER
});
