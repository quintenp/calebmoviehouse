import { combineReducers } from 'redux';
import videos from '../reducers/videoReducer';

const rootReducer = combineReducers({
    videos
});

export default rootReducer;