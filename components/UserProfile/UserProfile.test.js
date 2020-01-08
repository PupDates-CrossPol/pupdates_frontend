import React from 'react'
import renderer from 'react-test-renderer'

import { UserProfileScreen as UserProfile } from './UserProfile'

describe('<UserProfile />', () => {
  it('has one child', () => {
    const mockUser = {
      first_name: 'sara',
      last_name: 'karsh',
      email: 'emailaddress',
      description: 'a string of words'
    }
    const tree = renderer.create(<UserProfile user={mockUser} />).toJSON()
    expect(tree.children.length).toBe(1)
  })

  it('renders correctly', () => {
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