import { combineReducers, createStore } from 'redux'
import addUserReducer from './AddUser'
// import textReducer from './text'

const reducers = combineReducers({
    addUserReducer,
})

const store = createStore(reducers)

export default store