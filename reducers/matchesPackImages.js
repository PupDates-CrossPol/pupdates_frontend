export const matches = (state = [], action) => {
    switch (action.type) {
        case 'SET_MATCHES_PACK':
            return [...state, ...action.pack]
        default:
            return state;
    }
}