import * as ActionTypes from './ActionTypes' //this will import all exports from Action Types

export const addComment = (dishId, rating, author, comment) => ({ //return an action object
    type: ActionTypes.ADD_COMMENT,
    payload: { //data that is sent to the reducer function to send to the store
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment, //maps the properties to the variables of the payload

    }

});