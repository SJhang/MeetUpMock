export const UPDATE_EVENT_SEARCH_PARAM = "UPDATE_EVENT_SEARCH_PARAM";

export const updateEventSearchParam = (searchParams, value) => ({
  type: UPDATE_EVENT_SEARCH_PARAM,
  searchParams,
  value
});
