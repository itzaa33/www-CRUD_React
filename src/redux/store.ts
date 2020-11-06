import { createStore } from 'redux'
import { logger } from 'redux-logger'
import listUserReducer from './ListsUser'
import * as TypeAddUser from './ListsUser/type'


function saveToLocalStorage(state: TypeAddUser.TypeProps)
{
    try
    {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("store", serialisedState);
    } catch (e)
    {
        console.warn(e);
    }
}

function loadFromLocalStorage()
{
    try
    {
        const serialisedState = localStorage.getItem("store");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e)
    {
        console.warn(e);
        return undefined;
    }
}

const store = createStore(listUserReducer, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store