import React from 'react'
import renderer from 'react-test-renderer'
import { SwipeDogCard, mapStateToProps } from './SwipeDogCard'
import { Provider } from 'react-redux'

describe('<SwipeDogCard />', () => {
  it('has two children', () => {
    const mockSwipePack = [
      { 
        attributes: {
        id: 1,
        user_id: 1,
        name: 'fluffy'
        }
      }
    ]
    const mockSwipePackPhotos = [
      {
        id: 1,
        dog_id: 1,
        image_url: 'woof'
      }
    ]
    const tree = renderer.create(<SwipeDogCard swipePack={mockSwipePack} swipePackPhotos={mockSwipePackPhotos} />).toJSON()
    expect(tree.children.length).toBe(2)
  })
  it('renders correctly', () => {
    const mockSwipePack = [
      { 
        attributes: {
        id: 1,
        user_id: 1,
        name: 'fluffy'
        }
      }
    ]
    const mockSwipePackPhotos = [
      {
        id: 1,
        dog_id: 1,
        image_url: 'woof'
      }
    ]
    const tree = renderer.create(<SwipeDogCard swipePack={mockSwipePack} swipePackPhotos={mockSwipePackPhotos} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('mapStateToProps', () => {
  it('should return an object with the swipePack and swipePackPhotos', () => {
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

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expectedState)
  })
})