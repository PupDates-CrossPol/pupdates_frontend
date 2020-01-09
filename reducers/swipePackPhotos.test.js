import { swipePackPhotos } from './swipePackPhotos'

describe('swipePackPhotos', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = swipePackPhotos(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with the swipePackPhotos array', () => {
    const swipePackPhotosArr = [{id: 1, dog_id: 1, image: 'someurl'}]

    const mockSetSwipePackPhotos = { type: 'SET_SWIPE_PACK_PHOTOS', swipePhotos: swipePackPhotosArr}

    const result = swipePackPhotos(undefined, mockSetSwipePackPhotos)

    expect(result).toEqual(swipePackPhotosArr)
  })
})