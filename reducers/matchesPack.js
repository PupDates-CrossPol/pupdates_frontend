export const matches = (state = [], action) => {
    switch (action.type) {
        case 'SET_MATCHES_PACK_IMAGES':
            return [...state, ...action.images]
        default:
            return state;
    }
}