import * as ActionTypes from './ActionTypes' //this will import all exports from Action Types
import  { DISHES } from '../shared/dishes'
import { baseUrl } from '../shared/baseUrl'

export const addComment = (comment) => ({ //creates an addComment object (update: now pushes the comment to the store)
    type: ActionTypes.ADD_COMMENT,
    payload: comment

});

export const postComment = (dishId, rating, author, comment) => (dispatch) => { //posts a comment which will be put in the redux store and saved in the server (will show even when you reload the page)
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment

    }

    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment), //turns comment above into a JSON object to put in the body
        headers: {
            'Content-Type':'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response; //if the request is successful, then the response returned is passed to the callback functionn below and the comment is updated
            }
            else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText) //sends an Error plus the status(type of error) and the message delivered by the server
                error.response = response;
                throw error; 
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess
        }) 
        .then(response => response.json()) 
        .then(response => dispatch(addComment(response))) //sends the updated comment to dispatch which then puts it in redux store
        .catch(error => { console.log('Post comments', error.message)
            alert('Your comment could not be posted \n Error: ' + error.message); })

}

export const fetchDishes = () => (dispatch) => { //gets the dishes by dispatching the added dishes to the store, with a delay of 2000 sec (this is then accessed by the main component)
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes') //fetches the dishes url of the program
        .then(response => {
            if (response.ok) {
                return response; //if the request is successful, then the response returned is passed to the callback functionn below
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText) //sends an Error plus the status(type of error) and the message delivered by the server
                error.response = response;
                throw error; //throws the erroor to the catch function below
            }
        },
        error => { //this happens when the server doesn't send a response
            var errmess = new Error(error.message);
            throw errmess
        })
        .then(response => response.json()) //converts response to json for processing
        .then(dishes => dispatch(addDishes(dishes))) //sends the dishes to the store for access from the main component
        .catch(error => dispatch(dishesFailed(error.message))); //catches a rejected promise
}

export const dishesLoading = () => ({ //action creators that have the corresponding action type and the payload attributes to use in other components (sent to the dispatcher and then the store later to be used by other components)
    type: ActionTypes.DISHES_LOADING
});

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
})

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const fetchComments = () => (dispatch) => { 
    
  

    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response; //if the request is successful, then the response returned is passed to the callback functionn below
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText) //sends an Error plus the status(type of error) and the message delivered by the server
                error.response = response;
                throw error; //throws the erroor to the catch function below
            }
        },
        error => { //this happens when the server doesn't send a response
            var errmess = new Error(error.message);
            throw errmess
        })
        .then(response => response.json()) 
        .then(comments => dispatch(addComments(comments))) 
        .catch(error => dispatch(commentsFailed(error.message)));
}

export const fetchPromos = () => (dispatch) => { 
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response; //if the request is successful, then the response returned is passed to the callback functionn below
            }
            else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText) //sends an Error plus the status(type of error) and the message delivered by the server
                error.response = response;
                throw error; //throws the error to the catch function below
            }
        },
        error => { //this happens when the server doesn't send a response
            var errmess = new Error(error.message);
            throw errmess
        }) 
        .then(response => response.json()) 
        .then(promos => dispatch(addPromos(promos))) 
        .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({ 
    type: ActionTypes.PROMOS_LOADING
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
})

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
})

