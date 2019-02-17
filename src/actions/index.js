import { ADD_VIDEO, FOUND_BAD_WORD, DATA_LOADED } from "../constants/actionTypes";

export function addVideo(payload) {
  return { type: ADD_VIDEO, payload };
}

export function foundBadWord(payload) {
  return { type: FOUND_BAD_WORD, payload };
}

export function getData() {
  return function (dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
      }).catch(error => {
        throw (error);
      });
  };
}
