import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes'
export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload; //contains various parts of the comment
            comment.id = state.length; //the current length of the array will be the next id of the comment
            comment.date = new Date().toISOString(); //converts the ISO date to the string
            return state.concat(comment); //adds to the copy of the COMMENTS array (DOESNT CHANGE THE STATE)
        default:
            return state; //return unmodified state
    }
}