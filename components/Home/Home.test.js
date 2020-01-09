import React from 'react'
import renderer from 'react-test-renderer'
import { HomeScreen as Home, mapStateToProps, mapDispatchToProps } from './Home'

describe('<Home />', () => {
  it.skip('has 2 children', () => {
    const naviProp = { navigation: { navigate: () => {} } };
    const mockUser = {
      attributes: {
        id: 1,
        first_name: 'bob',
        last_name: 'ross',
        description: 'happy little trees',
        email: 'happylittletrees@email.com',
        image: 'an image url'
      }
    }

    const mockSwipeUser = {
      attributes: {
        id: 2,
        first_name: 'sara',
        last_name: 'karsh',
        description: 'likes dogs',
        email: 'sarasemail',
      }
    }

    const mockSwipePackPhotos = [
      {
        id: 1,
        dog_id: 2,
        image_url: 'some string'
      }
    ]

    const mockSwipePack = [
      {
        attributes: 
          {
            id: 2,
            user_id: 2,
            name: 'fido',
            breed: 'dog'
          }
      }
    ]

    const tree = renderer.create(<Home navigation={naviProp} user={mockUser} swipeUser={mockSwipeUser} swipePackPhotos={mockSwipePackPhotos} swipePack={mockSwipePack} />).toJSON()
    // console.log('TREE', tree)
    expect(tree.children.length).toBe(2)
  })

  it.skip('renders correctly', () => {
    const naviProp = { navigation: { navigate: () => {} } };
    const mockUser = {
      attributes: {
        id: 1,
        first_name: 'bob',
        last_name: 'ross',
        description: 'happy little trees',
        email: 'happylittletrees@email.com',
        image: 'an image url'
      }
    }

    const mockSwipeUser = {
      attributes: {
        id: 2,
        first_name: 'sara',
        last_name: 'karsh',
        description: 'likes dogs',
        email: 'sarasemail',
      }
    }

    const mockSwipePackPhotos = [
      {
        id: 1,
        dog_id: 2,
        image_url: 'some string'
      }
    ]

    const mockSwipePack = [
      {
        id: 2,
        user_id: 2,
        name: 'fido',
        breed: 'dog'
      }
    ]

    const tree = renderer.create(<Home navigation={naviProp} user={mockUser} swipeUser={mockSwipeUser} swipePackPhotos={mockSwipePackPhotos} swipePack={mockSwipePack} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
