import { value } from 'lodash';
export const groupsAsArray = ({ groups }) => Object.keys(groups.groups).map(key => groups.groups[key]);

export const selectGroup = ({ groups }, id) => groups.groups[id] || {};
// export const eventsAsArray = ({ events }) => value.events;

// export const selectGroup = ({ groups }, id) => groups[id] || {};
// export const groupsAsArray = ({ groups }) => Object.keys(groups).map(id => groups[id]);

// export const selectEvent = ({ events }, id) => events[id] || {};
// export const eventsAsArray = ({ events }) => Object.keys(events).map(id => events[id]);

// export const selectMembersFromGroups = ({ groups: { members } }) => members || [];
