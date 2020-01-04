export const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return action.user;
    default:
      return state;
  }
};
