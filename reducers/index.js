import { combineReducers } from 'redux'
import { user } from './user'
import { pack } from './pack'
import { packPhotos } from './packPhotos'
import { otherUsers } from './otherUsers'
import { swipeUser } from './swipeUser'
import { swipePack } from './swipePack'
import { swipePackPhotos } from './swipePackPhotos'
import { tempUserImage } from './tempUserImage'
import { imageUpload } from './imageUpload'
import { modalState } from './modalState'

export const rootReducer = combineReducers({
  user,
  pack,
  packPhotos,
  otherUsers,
  swipeUser,
  swipePack,
  swipePackPhotos,
  tempUserImage,
  imageUpload,
  modalState
})