import { tempUserImage } from './tempUserImage'

describe('tempUserImage', () => {
  it('should return the initial state', () => {
    const expected = null
    const result = tempUserImage(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with the temp user image object', () => {
    const tempImageObj = { url: 'someurl'}
    const mockSetTempImg = { type: 'SET_TEMP_USER_IMAGE', tempUserImage: tempImageObj}

    const result = tempUserImage(undefined, mockSetTempImg)

    expect(result).toEqual(tempImageObj)
  })
})