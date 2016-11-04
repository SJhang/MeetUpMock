export const selectGroup = ({ groups }, id) => groups[id] || {};
export const groupAsArray = ({ groups }) => Object.keys(groups).map(id => groups[id]);

export const selectEvent = ({ events }, id) => events[id] || {};
export const eventAsArray = ({ events }) => Object.keys(events).map(id => events[id]);

export const selectMemberFromGroups = ({ groups: { members } }) => members || [];
