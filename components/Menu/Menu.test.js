import React from 'react'
import renderer from 'react-test-renderer'
import { MenuScreen as Menu, mapStateToProps, mapDispatchToProps } from './Menu'

describe('<Menu />', () => {
  it('has 4 children', () => {
    const mockUser = {
      id: 1,
      first_name: 'bob',
      last_name: 'ross',
      description: 'happy little trees',
      email: 'happylittletrees@email.com',
      image: 'an image url'
    }

    const mockPackPhotos = [
      {
        id: 1,
        dog_id: 1,
        image: 'somestring'
      }
    ]

    const naviProp = { navigation: { navigate: () => {} } };

    const tree = renderer.create(<Menu user={mockUser} packPhotos={mockPackPhotos} navigation={naviProp} />).toJSON()

    expect(tree.children.length).toBe(3)
  })

  it('renders correctly', () => {
    const mockUser = {
      id: 1,
      first_name: 'bob',
      last_name: 'ross',
      description: 'happy little trees',
      email: 'happylittletrees@email.com',
      image: 'an image url'
    }

    const mockPackPhotos = [
      {
        id: 1,
        dog_id: 1,
        image: 'somestring'
      }
    ]

    const naviProp = { navigation: { navigate: () => {} } };

    const tree = renderer.create(<Menu user={mockUser} packPhotos={mockPackPhotos} navigation={naviProp} />).toJSON()

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
      swipePack: [
        {
          id: 1,
          user_id: 1,
          name: 'fluffy',
        }
      ],
      swipePackPhotos: [
        {
          id: 1,
          dog_id: 1,
          image_url: 'someaddress'
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
    }

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expectedState)
  })
})