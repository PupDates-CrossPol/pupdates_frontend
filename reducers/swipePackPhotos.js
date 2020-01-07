export const swipePackPhotos = (state = [], action) => {
  switch (action.type) {
    case 'SET_SWIPE_PACK_PHOTOS':
      console.log('swipePackPhotos reducer:', action.swipePhotos);
      
      return [...state, ...action.swipePhotos]
    default:
      return state
  }
}