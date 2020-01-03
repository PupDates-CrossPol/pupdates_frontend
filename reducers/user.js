export const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      console.log('hello trying to set state', action)
      return action.user;
    default:
      return state;
  }
};
