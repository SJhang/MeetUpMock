export const UPDATE_EVENT_SEARCH_PARAM = "UPDATE_EVENT_SEARCH_PARAM";

export const updateEventSearchParam = (searchEventParam, value) => ({
  type: UPDATE_EVENT_SEARCH_PARAM,
  searchEventParam,
  value
});
