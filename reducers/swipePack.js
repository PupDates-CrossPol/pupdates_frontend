export const swipePack = (state = [], action) => {
  switch (action.type) {
    case 'SET_SWIPE_PACK':
      return [...state, action.swipePack]
    default:
      return state;
  }
}