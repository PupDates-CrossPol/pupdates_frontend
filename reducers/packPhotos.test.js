import { packPhotos } from './packPhotos'

describe('packPhotos', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = packPhotos(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with the pack photos array', () => {
    const packPhotosArr = [{id: 1, dog_id: 1, image: 'someurl'}]

    const mockSetPackPhotos = { type: 'SET_PACK_PHOTOS', packPhotos: packPhotosArr}

    const result = packPhotos(undefined, mockSetPackPhotos)

    expect(result).toEqual(packPhotosArr)
  })
})