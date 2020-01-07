export const tempUserImage = (state = null, action) => {
  switch (action.type) {
    case 'SET_TEMP_USER_IMAGE':
      return action.tempUserImage;
    default:
      return state;
  }
};