import { swipeUser } from './swipeUser'

describe('swiperUser', () => {
  it('should return the initial state', () => {
    const expected = {}

    const result = swipeUser(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with a swipe user object', () => {
    const swipeUserObj = {id: 2, first_name: 'bob', last_name: 'ross', email: 'happylittletrees', description: 'a guy who paints'}

    const mockSetSwipeUser = {type: 'SET_SWIPE_USER', swipeUser: swipeUserObj}

    const result = swipeUser(undefined, mockSetSwipeUser)

    expect(result).toEqual(swipeUserObj)
  })
})