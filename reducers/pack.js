export const pack = (state = [], action) => {
    switch (action.type) {
        case 'SET_PACK_INFO':
            return action.pack;
        default:
            return state;
    }
}