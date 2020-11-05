import { applyMiddleware, combineReducers, createStore } from 'redux'
import { logger  } from 'redux-logger'
import addUserReducer from './AddUser'

const reducers = combineReducers({
    addUserReducer,
})

const store = createStore(
    reducers,
    // applyMiddleware(logger)
)

export default store