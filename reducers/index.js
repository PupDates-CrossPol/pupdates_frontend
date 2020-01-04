import { combineReducers } from 'redux'
import { user } from './user'
import { pack } from './pack'

export const rootReducer = combineReducers({
  user,
  pack
})