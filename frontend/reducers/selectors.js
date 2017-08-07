import { values } from 'lodash';

export const selectGroup = ({ groups }, id) => groups[id] || {};
export const groupsAsArray = (groups) => values(groups);

export const selectEvent = ({ events }, id) => events[id] || {};
export const eventsAsArray = ({ events }) => values(events);

export const selectOrganizer = ({ user }, id) => user[id] || {};
