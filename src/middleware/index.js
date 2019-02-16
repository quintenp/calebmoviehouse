import { ADD_VIDEO } from "../constants/actionTypes";
import { foundBadWord } from "../actions/index";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === ADD_VIDEO) {
                const foundWord = forbiddenWords.filter(word =>
                    action.payload.link.toLowerCase().includes(word)
                );

                if (foundWord.length) {
                    return dispatch(foundBadWord("Video not Saved: Found Bad Words - " + action.payload.link));
                }
            }

            return next(action);
        };
    };
}