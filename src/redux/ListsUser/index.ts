import { TypeProps, TypeAction } from './type'

export type Action = {
    type: TypeAction,
    payload: TypeProps
}

function addUserReducer(state, action)
{
    switch (action.type)
    {
        case TypeAction.SET_ADDUSER:
            return action.payload
        default:
            return state
    }
}

export default addUserReducer