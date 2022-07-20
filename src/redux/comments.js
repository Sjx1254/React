
import * as ActionTypes from './ActionTypes'
export const Comments = (state = {errmess: null, comments: []}, action) => { //same structure as dishes.js, but there isn't a loading message
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:  
            return {... state, isLoading: false, errMess: null, comments: action.payload}
        case ActionTypes.DISHES_FAILED:
            return {... state, isLoading: false, errMess: action.payload, comments: []}
        case ActionTypes.ADD_COMMENT: //this will only add it to the store if the server sends a suceesful response
            let comment = action.payload; //contains various parts of the comment
            return {...state, comments: state.comments.concat(comment)}; //adds to the copy of the COMMENTS array (DOESNT CHANGE THE STATE)
        
        default:
            return state; //return unmodified state
    }
}