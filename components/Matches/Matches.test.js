import React from 'react'
import renderer from 'react-test-renderer'
import { MatchesScreen as Matches, mapStateToProps } from './Matches'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

const mockStore = configureStore([])

describe('<Matches />', () => {
  it('has two children', () => {

    const initialState = {
      matches: [
        {
          id: 1,
          first_name: 'bob',
          last_name: 'ross',
          email: 'happy little trees'
        }
      ],
      pack: [
        {
          id: 1,
          name: 'fluffy'
        }
      ],
    }

    const store = mockStore(initialState);
   
    const tree = renderer.create(
    <Provider store={store}>
      <Matches />
    </Provider>
    ).toJSON()

    expect(tree.children.length).toBe(1)
  })

  it('renders correctly', () => {
    const initialState = {
      matches: [
        {
          id: 1,
          first_name: 'bob',
          last_name: 'ross',
          email: 'happy little trees'
        }
      ],
      pack: [
        {
          id: 1,
          name: 'fluffy'
        }
      ],
    }

    const store = mockStore(initialState);
   
    const tree = renderer.create(
    <Provider store={store}>
      <Matches />
    </Provider>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})

// matches={initialState.matches} navigation={naviProp} packPhotos={initialState.packPhotos}