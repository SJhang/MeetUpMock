import {
  receiveCurrentUser,
  receiveErrors,
  LOGIN,
  LOGOUT,
  SIGNUP,
  CREATE_IMAGE
} from '../actions/session_actions';
import { login, logout, signup, createImage } from '../util/session_api_util';


export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));

  switch (action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(()=>next(action));
      return next(action);
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    case CREATE_IMAGE:
      createImage(action.image, successCallback, getState().session.currentUser.id);
      return next(action);
    default:
      return next(action);
  }
};
