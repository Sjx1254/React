import { configureStore} from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { Dishes } from './dishes'
import { Comments} from './comments'
import { Promotions } from './promotions'
import { Leaders} from './leaders'

const rootReducer = combineReducers({dishes: Dishes, comments: Comments, promotions: Promotions, leaders: Leaders}) //maps the variables to the reducer functions and their information and combines all of them to create one state 
export const ConfigureStore = () => { //configureStore is the new implementation of createStore
    const store = configureStore({
        reducer: rootReducer
    });

    return store
}