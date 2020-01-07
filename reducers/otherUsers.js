export const otherUsers = (state = null, action) => {
  switch (action.type) {
    case 'SET_OTHER_USERS':
      return action.otherUsers
    default:
      return state
  }
}