export const updateUser = (user, success, errors) => {
  $.ajax({
    method: "PATCH",
    url: `api/users/${user.id}`,
    success,
    errors
  });
};

export const getLocation = (url, success) => {
  $.ajax({
    url: url,
    success
  });
};

export const getAllUsers = (success) => {
  $.ajax({
    url: 'api/users',
    success
  });
};

export const getUser = (id, success, error) => {
  $.ajax({
    url: `/api/users/${id}`,
    success,
    error
  });
};
