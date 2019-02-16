import { ADD_VIDEO, FOUND_BAD_WORD } from "../constants/actionTypes";

const initialState = {
    videos: [],
    badWordMessage: ""
};

export default function videoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_VIDEO:
            return Object.assign({}, state, { videos: [action.payload], badWordMessage: "" });
        case FOUND_BAD_WORD:
            return Object.assign({}, state, { badWordMessage: action.payload });
        default: return state;
    }
}