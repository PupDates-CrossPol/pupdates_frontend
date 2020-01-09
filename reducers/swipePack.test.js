import { swipePack } from './swipePack'

describe('swipePack', () => {
  it('should return the initial state', () => {
    const expected = null

    const result = swipePack(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with the swipe pack array', () => {
    const swipePackArr = [{id: 1, dog_id: 1, name: 'woof'}]

    const mockSetSwipePack = {type: 'SET_SWIPE_PACK', swipePack: swipePackArr}

    const result = swipePack(undefined, mockSetSwipePack)
    
    expect(result).toEqual(swipePackArr)
  })
})