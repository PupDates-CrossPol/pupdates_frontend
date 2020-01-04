export const packPhotos = (state = [], action) => {
    switch (action.type) {
        case 'SET_PACK_PHOTOS':
            return action.packPhotos;
        default:
            return state;
    }
}