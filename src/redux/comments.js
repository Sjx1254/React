
import * as ActionTypes from './ActionTypes'
export const Comments = (state = {errmess: null, comments: []}, action) => { //same structure as dishes.js, but there isn't a loading message
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:  
            return {... state, isLoading: false, errMess: null, comments: action.payload}
        case ActionTypes.DISHES_FAILED:
            return {... state, isLoading: false, errMess: action.payload, comments: []}
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload; //contains various parts of the comment
            comment.id = state.comments.length; //the current length of the array will be the next id of the comment
            comment.date = new Date().toISOString(); //converts the ISO date to the string
            return {...state, comments: state.comments.concat(comment)}; //adds to the copy of the COMMENTS array (DOESNT CHANGE THE STATE)
        
        default:
            return state; //return unmodified state
    }
}