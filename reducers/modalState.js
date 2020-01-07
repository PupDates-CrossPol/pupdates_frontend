export const modalState = (state = false, action) => {
    switch (action.type) {
        case 'SET_MODAL_STATE':
            return !state;
        default:
            return state;
    }
}