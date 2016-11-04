import {
  FETCH_ALL_GROUPS,
  FETCH_GROUP,
  CREATE_GROUP,
  UPDATE_GROUP
} from '../actions/group_actions';
// import {login, logout, signup} from '../util/session_api_util';

export default ({dispatch}) => next => action => {
  switch (action.type) {
    case FETCH_ALL_GROUPS:
      break;
    case FETCH_GROUP:
      break;
    case CREATE_GROUP:
      break;
    case UPDATE_GROUP:
      break;
    default:
      return next(action);
  }
};
