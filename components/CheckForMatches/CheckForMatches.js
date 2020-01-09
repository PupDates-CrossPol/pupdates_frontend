import * as React from 'react';
import { connect } from 'react-redux'
import { setMatches, setMatchesPack, setMatchesPackImages} from '../../actions'
import * as apiCalls from '../../apiCalls';


 cleanResponse = responses => {
    return responses.map( response => {
      return response.attributes
    })
  }

  const getMatchesPackImages = (pack, props) => {
    pack.forEach( async dog => {
      const dogImages = await apiCalls.getDogImagesById(dog.id)
      const matchesPackPhotos = cleanResponse(dogImages)
      props.setMatchesPackImages(matchesPackPhotos)
    })
  }

  const getMatchesPackInfo = (matches, props) => {
    if (!matches.length) {
      matches.forEach( async match => {
        const dogPackResponse = await apiCalls.getDogsForUser(match.id)
        const cleanedMatchesPackImagesResponse = cleanResponse(dogPackResponse)
        getMatchesPackImages(cleanedMatchesPackImagesResponse, props)
        props.setMatchesPack(cleanedMatchesPackImagesResponse)
      })
    } else {
      return
    }
  }

  export const CheckForMatches = async (props) => {
    console.log('current match', props.matches);
    const matches = await apiCalls.getMatchesForUser(props.user.id)
    const cleanedUsers = cleanResponse(matches)
    props.setMatches(cleanedUsers)
    const userIds = props.matches.map( user => user.id)
    const newUserMatches = cleanedUsers.filter( match => {
        !userIds.includes(match.id)
    })
    if (newUserMatches.length) {
        console.log('newUserMatches', newUserMatches);
        getMatchesPackInfo(newUserMatches, props)
    }
  }
