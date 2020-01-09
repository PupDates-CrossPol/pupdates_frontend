export const matchesPackImages = (state = [], action) => {
    switch (action.type) {
        case 'SET_MATCHES_PACK_IMAGES':
            return [...state, ...action.matchesPackImages]
        default:
            return state;
    }
}