import { ADD_VIDEO } from "../constants/actionTypes";

const initialState = {
    videos: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_VIDEO: Object.assign({}, state, {
            videos: state.videos.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;