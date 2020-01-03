export const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER-INFO':
      return action.user;
    default:
      return state;
  }
};
