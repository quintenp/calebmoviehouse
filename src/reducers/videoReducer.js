import { ADD_VIDEO, FOUND_BAD_WORD, DATA_LOADED } from "../constants/actionTypes";

const initialState = {
    videos: [],
    remoteVideos: [],
    badWordMessage: ""
};

export default function videoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_VIDEO:
            return Object.assign({}, state, { videos: [action.payload], badWordMessage: "" });
        case FOUND_BAD_WORD:
            return Object.assign({}, state, { badWordMessage: action.payload });
        case DATA_LOADED:
            return Object.assign({}, state, { remoteVideos: state.remoteVideos.concat(action.payload) });
        default: return state;
    }
}
