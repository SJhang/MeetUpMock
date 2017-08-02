import { values } from 'lodash';

export const groupsAsArray = (groups) => values(groups.groupIndex);

export const selectGroup = ({ groups }, id) => {
 return  groups.groups[id] || {};
 };

// export const selectAllEvents = ({ events }, id) => { debugger; };

export const selectEvent = ({ events }, id) => events.events[id] || {};
export const eventsAsArray = ({ events }) => Object.keys(events.events).map(id => events.events[id]);

// export const selectMembersFromGroups = ({ groups: { members } }) => members || [];
