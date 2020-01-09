import { otherUsers } from './otherUsers'

describe('otherUsers', () => {
  it('should return the initial state', () => {
    const expected = null

    const result = otherUsers(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with the other users array', () => {
    const otherUsersArr = [{ id: 2, first_name: 'bob', last_name: 'ross', description: 'paints', email: 'happylittletrees'}]

    const mockSetOtherUsers = { type: 'SET_OTHER_USERS', otherUsers: otherUsersArr}

    const result = otherUsers(undefined, mockSetOtherUsers)

    expect(result).toEqual(otherUsersArr)
  })
})