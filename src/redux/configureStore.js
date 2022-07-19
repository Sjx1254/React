import { configureStore} from '@reduxjs/toolkit'
import { createForms, creatForms } from 'react-redux-form'
import { combineReducers, applyMiddleware } from 'redux'
import { Dishes } from './dishes'
import { Comments} from './comments'
import { Promotions } from './promotions'
import { Leaders} from './leaders'
import thunk from'redux-thunk'
import logger from 'redux-logger'
import { InitialFeedback } from './forms'

const rootReducer = combineReducers({dishes: Dishes, comments: Comments, promotions: Promotions, leaders: Leaders, ...createForms({feedback: InitialFeedback})}) //maps the variables to the reducer functions and their information and combines all of them to create one state 
//this reducer will set the state of the formFeedback to the initialFeedback from forms.js
//initialfeedback is used to reset the form after it is submitted
export const ConfigureStore = () => { //configureStore is the new implementation of createStore
    const store = configureStore({
        reducer: rootReducer
    });

    applyMiddleware(thunk, logger) //basically stores all the actions that have happened and allows the dispatcher to perform actions not in sync with each other that may have to be changed

    return store
}