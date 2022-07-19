import * as ActionTypes from './ActionTypes' //this will import all exports from Action Types
import  { DISHES } from '../shared/dishes'

export const addComment = (dishId, rating, author, comment) => ({ //creates an addComment object
    type: ActionTypes.ADD_COMMENT,
    payload: { //data that is sent to the reducer function to send to the store
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment, //maps the properties to the variables of the payload

    }

});

export const fetchDishes = () => (dispatch) => { //gets the dishes by dispatching the added dishes to the store, with a delay of 2000 sec (this is then accessed by the main component)
    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES))
    }, 2000);
}

export const dishesLoading = () => ({ //action creators that have the corresponding action type and the payload attributes to use in other components (sent to the dispatcher and then the store later to be used by other components)
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})
