import React from 'react'
import renderer from 'react-test-renderer'
import * as actions from '../../actions/index'

import { UserProfileScreen as UserProfile, mapStateToProps, mapDispatchToProps } from './UserProfile'
import { ImageUpload } from '../ImageUpload/ImageUpload'
// import { mapStateToProps } from './UserProfile'

describe('<UserProfile />', () => {
  it.skip('has one child', () => {
    const mockUser = {
      first_name: 'sara',
      last_name: 'karsh',
      email: 'emailaddress',
      description: 'a string of words'
    }
    const tree = renderer.create(<UserProfile user={mockUser} />).toJSON()
    expect(tree.children.length).toBe(1)
  })

  it.skip('renders correctly', () => {
    const mockUser = {
      first_name: 'sara',
      last_name: 'karsh',
      email: 'emailaddress',
      description: 'a string of words'
    }
    const tree = renderer.create(<UserProfile user={mockUser} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('mapStateToProps', () => {
  it('should return an object with the user object', () => {
    const mockState = {
      user: {
        id: 1,
        first_name: 'sara',
        last_name: 'karsh',
        email: 'email',
        description: 'a string of words'
      },
      pack: [
        {
          id: 1,
          user_id: 1,
          name: 'fluffy',
        }
      ],
      packPhotos: [
        {
          id: 1,
          dog_id: 1,
          image_url: 'someaddress'
        }
      ],
      imageUpload: undefined,
      tempUserImage: undefined
    }

    const expectedState = {
      user: {
        id: 1,
        first_name: 'sara',
        last_name: 'karsh',
        email: 'email',
        description: 'a string of words'
      },
      pack: [
        {
          id: 1,
          user_id: 1,
          name: 'fluffy',
        }
      ],
      packPhotos: [
        {
          id: 1,
          dog_id: 1,
          image_url: 'someaddress'
        }
      ],
      imageUpload: undefined,
      tempUserImage: undefined
    }

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expectedState)
  })
})

describe('mapDispatchToProps', () => {
  it('setUserInfo should be dispatched with the correct action', () => {
    const mockDispatch = jest.fn()

    const mockUser = {
      id: 2,
      first_name: 'bob',
      last_name: 'ross',
      email: 'bobrossemail',
      description: 'happy little trees'
    }

    const actionToDispatch = actions.setUserInfo(mockUser)
    const mappedDispatch = mapDispatchToProps(mockDispatch)
    mappedDispatch.setUserInfo(mockUser)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('setPackInfo should be dispatched with the correct action', () => {
    const mockDispatch = jest.fn()
    const mockPack = [
      {
        id: 1,
        user_id: 1,
        name: 'charles',
        breed: 'lab',
        size: 'large'
      }
    ]
    const actionToDispatch = actions.setPackInfo(mockPack)
    const mappedDispatch = mapDispatchToProps(mockDispatch)
    mappedDispatch.setPackInfo(mockPack)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('setPackPhotos should be dispatched with the correct action', () => {
    const mockDispatch = jest.fn()
    const mockPackPhotos = [
      {
        id: 1,
        dog_id: 1,
        image_url: 'someaddress'
      }
    ]
    const actionToDispatch = actions.setPackPhotos(mockPackPhotos)
    const mappedDispatch = mapDispatchToProps(mockDispatch)
    mappedDispatch.setPackPhotos(mockPackPhotos)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('setTempUserImage should be dispatched with the correct action', () => {
    const mockDispatch = jest.fn()
    const mockTempImage = {
      uri: 'someurl'
    }
    const actionToDispatch = actions.setTempUserImage(mockTempImage)
    const mappedDispatch = mapDispatchToProps(mockDispatch)
    mappedDispatch.setTempUserImage(mockTempImage)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})