import React from 'react'
import renderer from 'react-test-renderer'
import { DogPackScreen as DogPack, mapStateToProps, mapDispatchToProps } from './DogPack'
import { DogCard } from '../DogCard/DogCard'

describe('<DogPack />', () => {
  it.skip('has one child', () => {
    const naviProp = { navigation: { navigate: () => {} } };
    const mockUser = {
      id: 1,
      first_name: 'sara',
      last_name: 'karsh',
      email: 'email',
      description: 'description'
    }
    const tree = renderer.create(<DogPack navigation={naviProp} user={mockUser} />)
    expect(tree.children.length).toBe(1)
  })
})