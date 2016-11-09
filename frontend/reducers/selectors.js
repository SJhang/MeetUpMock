import { value } from 'lodash';
export const groupsAsArray = ({ groups }) => Object.keys(groups.groups).map(key => groups.groups[key]);

export const selectGroup = ({ groups }, id) => {
 return  groups.groups[id] || {}
 }



export const selectEvent = ({ events }, id) => events.events[id] || {};
export const eventsAsArray = ({ events }) => Object.keys(events.events).map(id => events.events[id]);

// export const selectMembersFromGroups = ({ groups: { members } }) => members || [];
