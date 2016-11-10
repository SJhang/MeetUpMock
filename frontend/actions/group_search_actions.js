export const UPDATE_GROUP_SEARCH_PARAM = "UPDATE_GROUP_SEARCH_PARAM";

export const updateGroupSearchParam = (searchParams, value) => ({
  type: UPDATE_GROUP_SEARCH_PARAM,
  searchParams,
  value
});
