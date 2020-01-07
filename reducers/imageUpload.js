export const imageUpload = (state = null, action) => {
  switch (action.type) {
    case 'SET_IMAGE_UPLOAD':
      return action.imageUpload;
    default:
      return state;
  }
};