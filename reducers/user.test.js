import { user } from './user'

describe('user', () => {
  it('should return the initial state', () => {
    const expected = {}

    const result = user(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with a user object', () => {
    const userObj = {id: 1, first_name: 'sara', last_name: 'karsh', email:'sarasemail', description: 'a string'}
    const mockSetUserInfo = { type: 'SET_USER_INFO', user: userObj };

    const result = user(undefined, mockSetUserInfo);

    expect(result).toEqual(userObj);
  });
})
