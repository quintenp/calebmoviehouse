import { ADD_VIDEO } from "../constants/actionTypes";

export function addVideo(payload) {
    return { type: ADD_VIDEO, payload };
}