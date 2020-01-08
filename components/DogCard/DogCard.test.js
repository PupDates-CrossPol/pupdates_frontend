import React from 'react'
import renderer from 'react-test-renderer'
import { DogCard } from './DogCard'

describe('<DogCard />', () => {
  it('has one child', () => {
    const mockPack = [
      {
        id: 1,
        user_id: 1,
        name: 'fluffy',
        breed: 'lab',
        size: 'medium',
        age: 7,
        good_with_kids: true,
        fixed: true,
        vaccinated: true
      }
    ]
  
    const mockPackPhotos = [
      {
        id: 1,
        dog_id: 1,
        image_url: 'some string'
      }
    ]
  
    const tree = renderer.create(<DogCard pack={mockPack} packPhotos={mockPackPhotos} />).toJSON()
    expect(tree.children.length).toBe(1)

  })
  it('renders correctly', () => {
    const mockPack = [
      {
        id: 1,
        user_id: 1,
        name: 'fluffy',
        breed: 'lab',
        size: 'medium',
        age: 7,
        good_with_kids: true,
        fixed: true,
        vaccinated: true
      }
    ]
  
    const mockPackPhotos = [
      {
        id: 1,
        dog_id: 1,
        image_url: 'some string'
      }
    ]
  
    const tree = renderer.create(<DogCard pack={mockPack} packPhotos={mockPackPhotos} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})