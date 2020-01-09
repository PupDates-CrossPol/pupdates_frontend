export const matchesPack = (state = [], action) => {
    switch (action.type) {
        case 'SET_MATCHES_PACK':
            return [...state, ...action.matchesPack]
        default:
            return state;
    }
}