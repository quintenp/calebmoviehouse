import { ADD_VIDEO } from "../constants/actionTypes";
import { foundBadWord } from "../actions/index";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === ADD_VIDEO) {
                const foundWord = forbiddenWords.filter(word =>
                    action.payload.link.includes(word)
                );

                if (foundWord.length) {
                    return dispatch(foundBadWord("Found Bad Words in - " + action.payload.link));
                }
            }

            return next(action);
        };
    };
}