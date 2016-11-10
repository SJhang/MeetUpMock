export const fetchGroups = (params={}, success, errors) => {
  $.ajax({
    url: 'api/groups',
    data: params,
    success,
    errors
  });
};

export const fetchGroup = (id, success, errors) => {
  $.ajax({
    method: "GET",
    url: `api/groups/${id}`,
    success,
    errors
  });
};

export const createGroup = (group, success, errors) => {
  $.ajax({
    method: 'POST',
    url: `api/groups`,
    data: {group},
    success,
    errors
  });
};

export const updateGroup = (group, success, errors) => {
  $.ajax({
    method: 'PATCH',
    url: `api/groups/${group.id}`,
    data: {group},
    success,
    errors
  });
};

export const deleteGroup = (id, success, errors) => {
  $.ajax({
    method: 'DELETE',
    url: `api/groups/${id}`,
    success,
    errors
  });
};

export const addMember = (member, success, groupId) => {
  $.ajax({
    method: "PATCH",
    url: `api/groups/${groupId}`,
    data: {group: {members: {member}}},
    success
  });
};

export const deleteMember = (member, success, groupId) => {
  $.ajax({
    method: "PATCH",
    url: `api/groups/${groupId}`,
    data: {group: {members: {member}}},
    success
  });
};
