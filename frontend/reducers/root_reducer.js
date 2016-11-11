import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import GroupReducer from './group_reducer';
import EventReducer from './event_reducer';
import GroupSearchReducer from './group_search_reducer';
import UserReducer from './user_reducer';

export default combineReducers ({
  session: SessionReducer,
  groups: GroupReducer,
  events: EventReducer,
  searchParams: GroupSearchReducer,
  user: UserReducer
});
