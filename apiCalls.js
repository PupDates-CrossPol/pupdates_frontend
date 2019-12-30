export const getAllUsers = async () => {
  const response = await fetch('https://node-pupdates-backend.herokuapp.com/api/v1/users');
  if (!response.ok) {
    throw Error('Failed to fetch users');
  }
  const users = await response.json();
  return users;
};

export const getSingleUser = async (userId) => {
  const response = await fetch(`https://node-pupdates-backend.herokuapp.com/api/v1/users/${userId}`)

  if (!response.ok) {
    throw Error('Failed to find user')
  }
  const user = await response.json()
  return user
}

export const getAllDogs = async () => {
  const response = await fetch('https://node-pupdates-backend.herokuapp.com/api/v1/dogs')
  if (!response.ok) {
    throw Error('Failed to fetch dogs')
  }
  const dogs = await response.json()
  return dogs;
}

export const getDogsForUser = async (userId) => {
  const response = await fetch(`https://node-pupdates-backend.herokuapp.com/api/v1/users/${userId}/dogs`)

  if (!response.ok) {
    throw Error(`Failed to retrieve user's dogs`)
  }
  const userDogs = await response.json()
  return userDogs
}

export const getAllDogImages = async () => {
  const response = await fetch('https://node-pupdates-backend.herokuapp.com/api/v1/dog_images')
  if (!response.ok) {
    throw Error('Failed to fetch images')
  }
  const dogImages = await response.json()
  return dogImages
}

export const getDogImagesById = async (dogId) => {
  const response = await fetch(`https://node-pupdates-backend.herokuapp.com/api/v1/dog_images/${dogId}`)

  if (!response.ok) {
    throw Error('Failed to fetch images for this dog')
  }
  const dogPics = await response.json()
  return dogPics
}

export const loginUser = async (email, password) => {
  const response = await fetch('https://node-pupdates-backend.herokuapp.com/api/v1/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  if (!response.ok) {
    throw Error('Failed to login')
  }
  const user = await response.json()
  return user
}


export const addDogForUser = async (user_id, name, sex, breed, size, age, fixed, vaccinated, good_with_kids) => {
  const response = await fetch(`https://node-pupdates-backend.herokuapp.com/api/v1/users/${user_id}/dogs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      user_id,
      name,
      sex,
      breed,
      size,
      age,
      fixed,
      vaccinated,
      good_with_kids
    })
  })
  if (!response.ok) {
    throw Error('Failed to add dog')
  }
  const newDog = await response.json()
  return newDog
}





export const postPalette = async (project_id, palette_name, color_1, color_2, color_3, color_4, color_5) => {
  const response = await fetch(process.env.REACT_APP_BACKEND + '/api/v1/palettes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        project_id,
        palette_name,
        color_1,
        color_2,
        color_3,
        color_4,
        color_5,
      },
    ),
  });
  if (!response.ok) {
    throw Error('Failed to POST palette');
  }
  const message = await response.json();
  return message;
};



