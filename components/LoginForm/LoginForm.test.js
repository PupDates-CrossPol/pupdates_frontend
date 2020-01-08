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