import { combineReducers } from 'redux'
import { user } from './user'
import { pack } from './pack'
import { packPhotos } from './packPhotos'
import { otherUsers } from './otherUsers'

export const rootReducer = combineReducers({
  user,
  pack,
  packPhotos,
  otherUsers
})