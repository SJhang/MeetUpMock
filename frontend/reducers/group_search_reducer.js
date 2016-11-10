import { UPDATE_GROUP_SEARCH_PARAM } from '../actions/group_search_actions';
import merge from 'lodash/merge';

export const GroupSearchReducer = (state= {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_GROUP_SEARCH_PARAM:
      let searchParam = {[action.searchParams]: action.value};
      let newState = merge({}, state, searchParam);
      if (newState[action.searchParams] === "") {
        delete newState[action.searchParams];
      }
      return newState;
    default:
      return state;
  }
};

export default GroupSearchReducer;
