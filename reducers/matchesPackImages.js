export const matchesPackImages = (state = [], action) => {
    switch (action.type) {
        case 'SET_MATCHES_PACK':
            return [...state, ...action.matchesImages]
        default:
            return state;
    }
}