import { pack } from './pack'

describe('pack', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = pack(undefined, {})

    expect(result).toEqual(expected)


  })

  it('should return state with the pack array', () => {
    const packArr = [{id: 1, name: 'ollie', breed: 'piglet'}]

    const mockSetPackInfo = { type: 'SET_PACK_INFO', pack: packArr}

    const result = pack(undefined, mockSetPackInfo)

    expect(result).toEqual(packArr)

  })
})