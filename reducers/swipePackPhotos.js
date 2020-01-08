export const swipePackPhotos = (state = [], action) => {
  switch (action.type) {
    case 'SET_SWIPE_PACK_PHOTOS':
      return [...state, action.swipePhotos]
    default:
      return state
  }
}