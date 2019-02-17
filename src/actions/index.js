import { ADD_VIDEO, FOUND_BAD_WORD, DATA_LOADED } from "../constants/actionTypes";

export function addVideo(payload) {
  return { type: ADD_VIDEO, payload };
}

export function foundBadWord(payload) {
  return { type: FOUND_BAD_WORD, payload };
}

export function getData() {
  return function (dispatch) {
    return fetch("https://www.googleapis.com/youtube/v3/search?maxResults=5&part=snippet&q=babyshows&key=AIzaSyD85NgPxQCxpeBBCWcgYzsIge71KG6dy3Q", {method: 'GET'})
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
      }).catch(error => {
        throw (error);
      });
  };
}
