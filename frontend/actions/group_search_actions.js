export const UPDATE_GROUP_SEARCH_PARAM = "UPDATE_GROUP_SEARCH_PARAM";

export const updateGroupSearchParam = (searchGroupParam, value) => ({
  type: UPDATE_GROUP_SEARCH_PARAM,
  searchGroupParam,
  value
});
