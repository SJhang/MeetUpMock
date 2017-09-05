import {
  UPDATE_USER,
  receiveUser,
  receiveAllUsers,
  receiveErrors,
  fetchUser,
  FETCH_USER,
  FETCH_ALL_USERS
} from '../actions/user_actions';
import { getAllUsers, updateUser, getUser } from '../util/user_api_util';
import { createBrowserHistory } from 'history';

export const UserMiddleware = ({getState, dispatch}) => next => action => {
  let receiveCurrentUserSuccess;
  let receiveUserSuccess;
  let failure = errors => dispatch(receiveErrors(errors));
  const history = createBrowserHistory();

  switch (action.type) {
    case FETCH_ALL_USERS:
      let receiveAllUsersSuccess = (users) => dispatch(receiveAllUsers(users));
      getAllUsers(receiveAllUsersSuccess);
      return next(action);
    case FETCH_USER:
      receiveUserSuccess = user => dispatch(receiveUser(user));
      getUser(action.id, receiveUserSuccess, failure)
      return next(action);
    case UPDATE_USER:
      receiveCurrentUserSuccess = user => {
        dispatch(receiveUser(user));
        history.push('users/:userId');
      };
      updateUser(action.user, receiveCurrentUserSuccess, failure);
      return next(action);
    default:
      return next(action);
  }
};

export default UserMiddleware;
