export function setQuestions(questions) {
  return {
    type: 'SET_QUESTIONS',
    payload: questions,
  };
}

export function setPlan(plans) {
  return {
    type: 'SET_PLAN',
    payload: plans,
  };
}

export function setMyRequests(requests) {
  return {
    type: 'SET_MYREQUESTS',
    payload: requests,
  };
}
export function updateRequest(requests) {
  return {
    type: 'UPDATE_REQUEST',
    payload: requests,
  };
}

export function setRequest(requests) {
  return {
    type: 'SET_REQUEST',
    payload: requests,
  };
}

export function setLikes(requests) {
  return {
    type: 'SET_LIKES',
    payload: requests,
  };
}
export function setFavourites(favourites) {
  return {
    type: 'SET_FAVOURITES',
    payload: favourites,
  };
}

export function removeFavourites(favourites) {
  return {
    type: 'REMOVE_FAVOURITES',
    payload: favourites,
  };
}
