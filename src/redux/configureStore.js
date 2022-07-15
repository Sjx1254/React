import { configureStore } from '@reduxjs/toolkit'
import { Reducer, initialState} from './reducer'

export const ConfigureStore = () => { //configureStore is the new implementation of createStore
    const store = configureStore({
        reducer: Reducer,
        preloadedState: initialState //this is used to pass the initialState value
    })

    return store
}