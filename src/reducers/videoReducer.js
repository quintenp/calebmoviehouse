import { ADD_VIDEO } from "../constants/actionTypes";

export default function videoReducer(state = [], action) {
    switch (action.type) {
        case ADD_VIDEO:
            return [...state, Object.assign({}, action.payload)];
        default: return state;
    }
}