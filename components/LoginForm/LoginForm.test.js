import React from 'react'
import renderer from 'react-test-renderer'
import { LoginScreen as LoginForm, mapStateToProps, mapDispatchToProps } from './LoginForm'
import * as actions from '../../actions/index'

describe('<LoginForm />', () => {
  it('has one child', () => {
    const tree = renderer.create(<LoginForm />).toJSON()
    expect(tree.children.length).toBe(1)
  })
  it('renders correctly', () => {
    const tree = renderer.create(<LoginForm />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('mapStateToProps', () => {
  it('should return an object with the user, pack, pack photos, and other users', () => {
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
      otherUsers: [
        {
          id: 2,
          first_name: 'bob',
          last_name: 'ross',
          email: 'happylittletrees',
          description: 'a painter'
        }
      ]
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
      otherUsers: [
        {
          id: 2,
          first_name: 'bob',
          last_name: 'ross',
          email: 'happylittletrees',
          description: 'a painter'
        }
      ]
    }

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expectedState)

  })
})

describe('mapDispatchToProps', () => {
  it('setUserInfo should be dispatched with the correct action', () => {
    const mockDispatch = jest.fn()

    const mockUser = {
      id: 1,
      first_name: 'sara',
      last_name: 'karsh',
      email: 'email',
      description: 'a string of words'
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
        name: 'fluffy',
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
  it('setOtherUsers should be dispatched with the correct action', () => {
    const mockDispatch = jest.fn()

    const mockOtherUsers = [
      {
        id: 2,
        first_name: 'bob',
        last_name: 'ross',
        email: 'happylittletrees@email.com',
        description: 'a guy who paints'
      }
    ]

    const actionToDispatch = actions.setOtherUsers(mockOtherUsers)
    const mappedDispatch = mapDispatchToProps(mockDispatch)
    mappedDispatch.setOtherUsers(mockOtherUsers)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  
})