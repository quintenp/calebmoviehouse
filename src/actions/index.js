import { ADD_VIDEO, FOUND_BAD_WORD } from "../constants/actionTypes";

export function addVideo(payload) {
    return { type: ADD_VIDEO, payload };
}

export function foundBadWord(payload) {
    return { type: FOUND_BAD_WORD, payload };
}