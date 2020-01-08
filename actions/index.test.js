import * as actions from './index'

describe('setUserInfo', () => {
  it('should return the correct action object', () => {
    const mockUser = {
      id: 1,
      first_name: 'sara',
      last_name: 'karsh',
      email: 'sarakarsh@email.com',
      image: 'imageurl',
      description: 'some description',
      password: 'password'
    }

    const expected = {
      type: 'SET_USER_INFO',
      user: mockUser
    }

    const result = actions.setUserInfo(mockUser)

    expect(result).toEqual(expected)
  })
})

describe('setPackInfo', () => {
  it('should return the correct action object', () => {
    const mockPack = [
      {
        id: 1,
        user_id: 1,
        name: 'Fido',
        sex: 'male',
        breed: 'golden retriever',
        size: 'large',
        age: 4,
        fixed: true,
        vaccinated: true,
        good_with_kids: true
      },
      {
        id: 2,
        user_id: 1,
        name: 'fluffy',
        sex: 'male',
        breed: 'maltipoo',
        size: 'small',
        age: 2,
        fixed: true,
        vaccinated: true,
        good_with_kids: true
      },
    ]

    const expected = {
      type: 'SET_PACK_INFO',
      pack: mockPack
    }

    const result = actions.setPackInfo(mockPack)

    expect(result).toEqual(expected)
  })
})

describe('setPackPhotos', () => {
  it('should be called with the correct action object', () => {
    const mockPackPhotos = [
      {
        id: 1,
        dog_id: 1,
        image_url: 'someurl.com'
      },
      {
        id: 2,
        dog_id: 1,
        image_url: 'someotherurl.com'
      }
    ]

    const expected = {
      type: 'SET_PACK_PHOTOS',
      packPhotos: mockPackPhotos
    }

    const result = actions.setPackPhotos(mockPackPhotos)

    expect(result).toEqual(expected)
  })
})

describe('setOtherUsers', () => {
  it('should be called with the correct action object', () => {
    const mockOtherUsers = [
      {
        id: 2,
        first_name: 'matt',
        last_name: 'malone',
        email: 'mattmalone@email.com',
        password: 'password',
        description: 'a guy',
        image: 'someurl'
      },
      {
        id: 3,
        first_name: 'sam',
        last_name: 'coleman',
        email: 'samcoleman@email.com',
        password: 'password',
        description: 'another guy',
        image: 'someurl'
      }
    ]

    const expected = {
      type: 'SET_OTHER_USERS',
      otherUsers: mockOtherUsers
    }

    const result = actions.setOtherUsers(mockOtherUsers)

    expect(result).toEqual(expected)
  })
})

describe('setSwipeUser', () => {
  it('should return the correct action object', () => {
    const mockSwipeUser = {
      id: 2,
      first_name: 'matt',
      last_name: 'malone',
      email: 'mattmalone@email.com',
      description: 'a guy who has dogs',
      image: 'someurl'
    }

    const expected = {
      type: 'SET_SWIPE_USER',
      swipeUser: mockSwipeUser
    }

    const result = actions.setSwipeUser(mockSwipeUser)

    expect(result).toEqual(expected)
  })
})

describe('setSwipePack', () => {
  it('should return the correct action object', () => {
    const mockSwipePack = [
      {
        id: 1,
        dog_id: 1,
        name: 'fluffy',
        breed: 'mutt',
        size: 'small',
        age: 1,
        good_with_kids: false,
        vaccinated: false,
        fixed: true
      },
      {
        id: 2,
        user_id: 1,
        name: 'sprinkles',
        breed: 'pug',
        size: 'small',
        age: 1,
        good_with_kids: false,
        vaccinated: false,
        fixed: true
      }
    ]

    const expected = {
      type: 'SET_SWIPE_PACK',
      swipePack: mockSwipePack
    }

    const result = actions.setSwipePack(mockSwipePack)

    expect(result).toEqual(expected)


  })
})

describe('setSwipePackPhotos', () => {
  it('should return the correct action object', () => {
    const mockSwipePhotos = [
      {
        id: 1,
        dog_id: 1,
        image_url: 'someurl'
      },
      {
        id: 2,
        dog_id: 2,
        image_url: 'someotherurl'
      }
    ]

    const expected = {
      type: 'SET_SWIPE_PACK_PHOTOS',
      swipePhotos: mockSwipePhotos
    }

    const result = actions.setSwipePackPhotos(mockSwipePhotos)

    expect(result).toEqual(expected)
  })
})

describe('setTempUserImage', () => {
  it('should return the correct action object', () => {
    const mockTempUserImage = {
      uri: 'somestring'
    }

    const expected = {
      type: 'SET_TEMP_USER_IMAGE',
      tempUserImage: mockTempUserImage
    }

    const result = actions.setTempUserImage(mockTempUserImage)

    expect(result).toEqual(expected)
  })
})

describe('setImageUpload', () => {
  it.skip('should return the correct action object', () => {
  //how to test that a component renders on action???
  })
})