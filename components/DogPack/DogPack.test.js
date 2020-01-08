import React from 'react'
import renderer from 'react-test-renderer'
import { DogPackScreen as DogPack } from './DogPack'
import { DogCard } from '../DogCard/DogCard'

describe('<DogPack />', () => {
  it.skip('has one child', () => {
    const naviProp = { navigation: { navigate: () => {} } };
    const tree = renderer.create(<DogPack navigation={naviProp} />)
    expect(tree.children.length).toBe(1)
  })
})