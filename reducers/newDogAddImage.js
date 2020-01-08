export const newDogImages = (state = [], action) => {
    switch (action.type) {
        case 'SET_PACK_INFO':
            return [...state, action.newDogNewImage];
        default:
            return state;
    }
}

