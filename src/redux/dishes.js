import { Action } from 'history';
import * as ActionTypes from './ActionTypes';

export const Dishes = (state = { isLoading: true, errMess: null, dishes: []}, action) => { //sets the state of the dish depending on the action type and the action itself (the three methods in action creator that change the payload and set it to a value. The part of the state that this affects is changed and then this is accessed by main as props from the store)
    switch(action.type) {
        case ActionTypes.ADD_DISHES:  
            return {... state, isLoading: false, errMess: null, dishes: action.payload}
        case ActionTypes.DISHES_LOADING:
            return {... state, isLoading: true, errMess: null, dishes: []}
        case ActionTypes.DISHES_FAILED:
            return {... state, isLoading: false, errMess: action.payload}
        default:
            return state; //return unmodified state
    }
}