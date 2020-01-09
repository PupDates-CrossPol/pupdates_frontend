import { newDogImages } from './newDogImages'

describe('newDogImages', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = newDogImages(undefined, {})

    expect(result).toEqual(expected)
  })

  // it.skip('should return state with the new dog images', () => {
  //   const newDogImgsArr = [{ id: 1, url: 'somestring'}]

  //   const mock
  // })
})