export const UPDATE_USER = "UPDATE_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const FETCH_USER = "FETCH_USER";

export const updateUser = user => ({
  type: UPDATE_USER,
  user
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const fetchAllUsers = () => ({
  type: FETCH_ALL_USERS
});

export const fetchUser = id => ({
  type: FETCH_USER,
  id
});
