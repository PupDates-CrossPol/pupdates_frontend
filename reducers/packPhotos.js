export const packPhotos = (state = [], action) => {
    switch (action.type) {
        case 'SET_PACK_PHOTOS':
            return [...state, ...action.packPhotos];
        default:
            return state;
    }
}