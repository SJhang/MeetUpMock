import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import session from './session_reducer';
import groups from './group_reducer';
import events from './event_reducer';
import searchParams from './group_search_reducer';
import user from './user_reducer';

export default combineReducers ({
  routing,
  session,
  groups,
  events,
  searchParams,
  user
});
