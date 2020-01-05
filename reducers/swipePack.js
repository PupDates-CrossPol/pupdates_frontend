export const swipePack = (state = null, action) => {
  switch (action.type) {
    case 'SET_SWIPE_PACK':
      return action.swipePack
    default:
      return state;
  }
}