import React from 'react'
import renderer from 'react-test-renderer'
import { SwipeDogCard } from './SwipeDogCard'
import { Provider } from 'react-redux'

describe('<SwipeDogCard />', () => {
  it('has one child', () => {
    const mockSwipePack = [
      {
        id: 1,
        user_id: 1,
        name: 'fluffy'
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
        id: 1,
        user_id: 1,
        name: 'fluffy'
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