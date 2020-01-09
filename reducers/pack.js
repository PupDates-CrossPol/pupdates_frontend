export const pack = (state = [], action) => {
    switch (action.type) {
        case 'SET_PACK_INFO':
            return [...state, ...action.pack];
        default:
            return state;
    }
}