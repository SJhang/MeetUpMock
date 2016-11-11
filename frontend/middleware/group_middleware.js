import {
  receiveAllGroups,
  receiveGroup,
  removeGroup,
  getGroups,
  FETCH_ALL_GROUPS,
  FETCH_GROUP,
  CREATE_GROUP,
  UPDATE_GROUP,
  DELETE_GROUP,
  receiveErrors,
  ADD_MEMBER,
  DELETE_MEMBER,
  POPULATE_GROUPS,
  receivePopulatedGroups
} from '../actions/group_actions';

import {
  UPDATE_GROUP_SEARCH_PARAM
} from '../actions/group_search_actions';
import {
  createGroup,
  deleteGroup,
  updateGroup,
  fetchGroups,
  fetchGroup,
  addMember,
  deleteMember,
  populateGroups
} from '../util/groups_api_util';
import { hashHistory } from 'react-redux';

export default ({getState, dispatch}) => next => action => {
  let success;
  let receiveAllGroupsSuccess = groups => dispatch(receiveAllGroups(groups));
  let receiveGroupSuccess = group => dispatch(receiveGroup(group));
  let removeGroupSuccess = group => dispatch(removeGroup(group));
  let failure = errors => dispatch(receiveErrors(errors.responseJSON));
  let populateGroupSuccess = groups => dispatch(receivePopulatedGroups(groups));

  switch (action.type) {
    case FETCH_ALL_GROUPS:
      let searchParams = getState().searchParams;
      fetchGroups(searchParams, receiveAllGroupsSuccess, failure);
      return next(action);
    case FETCH_GROUP:
      fetchGroup(action.group, receiveGroupSuccess, failure);
      return next(action);
    case CREATE_GROUP:
      createGroup(action.group, receiveGroupSuccess, failure);
      return next(action);
    case UPDATE_GROUP:
      success = group => {
        dispatch(receiveGroup(group));
        hashHistory.push('groups/:groupId');
      };
      updateGroup(action.group, success, failure);
      return next(action);
    case DELETE_GROUP:
      deleteGroup(action.id, removeGroupSuccess, failure);
      return next(action);
    case ADD_MEMBER:
      addMember(action.member, receiveGroupSuccess, action.id);
      return next(action);
    case DELETE_MEMBER:
      deleteMember(action.member, receiveGroupSuccess, action.groupId);
      return next(action);
    case UPDATE_GROUP_SEARCH_PARAM:
      dispatch(getGroups());
      return next(action);
    case POPULATE_GROUPS:
      populateGroups(populateGroupSuccess);
      return next(action);
    default:
      return next(action);
  }
};
