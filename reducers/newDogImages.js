export const newDogImages = (state = [], action) => {
    switch (action.type) {
        case 'SET_NEW_DOG_ADD_IMAGE':
            return [...state, action.newDogImages];
        default:
            return state;
    }
}