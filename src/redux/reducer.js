//reducer function implementation
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import  { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      
}

export const Reducer = (state = initialState, action) => { //when you call a reducer, the state is uninitialized, so we set it
    return state;
};