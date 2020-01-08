export const setUserInfo = (user) => ({
  type: 'SET_USER_INFO',
  user,
})

export const setPackInfo = pack => ({
  type: 'SET_PACK_INFO',
  pack
})

export const setPackPhotos = packPhotos => ({
  type: 'SET_PACK_PHOTOS',
  packPhotos
})

export const setOtherUsers = otherUsers => ({
  type: 'SET_OTHER_USERS',
  otherUsers
})

export const setSwipeUser = swipeUser => ({
  type: 'SET_SWIPE_USER',
  swipeUser
})

export const setSwipePack = swipePack => ({
  type: 'SET_SWIPE_PACK',
  swipePack
})

export const setSwipePackPhotos = swipePhotos => ({
  type: 'SET_SWIPE_PACK_PHOTOS',
  swipePhotos
})

export const setTempUserImage = tempUserImage => ({
	type: 'SET_TEMP_USER_IMAGE',
	tempUserImage
})

export const setImageUpload = imageUpload => ({
	type: 'SET_IMAGE_UPLOAD',
	imageUpload
})

export const setModalState = modalState => ({
	type: 'SET_MODAL_STATE',
	modalState
})

export const setMatches = matches => ({
	type: 'SET_MATCHES',
	matches
})

export const setMatchesPack = matchesPack => ({
	type: 'SET_MATCHES_PACK',
	matchesPack
})

export const setMatchesPackImages = matchesImages => ({
	type: 'SET_MATCHES_PACK_IMAGES',
	matchesImages
})