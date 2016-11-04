import {
  receiveAllGroups,
  receiveGroup,
  removeGroup,
  FETCH_ALL_GROUPS,
  FETCH_GROUP,
  CREATE_GROUP,
  UPDATE_GROUP,
  DELETE_GROUP,
  receiveErrors
} from '../actions/group_actions';
import {
  createGroup,
  deleteGroup,
  updateGroup,
  fetchGroups,
  fetchGroup
} from '../util/groups_api_util';
import { hashHistory } from 'react-redux';

export default ({dispatch}) => next => action => {
  let success;
  let fail;
  let receiveAllGroupsSuccess = groups => dispatch(receiveAllGroups(groups));
  let receiveGroupSuccess = group => dispatch(receiveGroup(group));
  let removeGroupSuccess = group => dispatch(removeGroup(group));
  let failure = errors => dispatch(receiveErrors(errors));

  switch (action.type) {
    case FETCH_ALL_GROUPS:
      fetchGroups(receiveAllGroupsSuccess, failure);
      return next(action);
    case FETCH_GROUP:
      fetchGroup(action.id, receiveGroupSuccess, failure);
      return next(action);
    case CREATE_GROUP:
      createGroup(action.group, receiveGroupSuccess, failure);
      return next(action);
    case UPDATE_GROUP:
      success = group => {
        dispatch(receiveGroup(group));
        hashHistory.push('/groups/:groupId');
      };
      updateGroup(action.group, success, failure);
      return next(action);
    case DELETE_GROUP:
      deleteGroup(action.id, removeGroupSuccess, failure);
      return next(action);
    default:
      return next(action);
  }
};
