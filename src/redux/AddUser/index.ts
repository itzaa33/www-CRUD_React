import { TypeProps, TypeAction } from './type'

var initialState: TypeProps = {
    title: '',
    name: '',
    lastname: '',
    birthday: Date.now(),
    nationality: '',
    citizenid: '',
    gender: '',
    passport: '',
    expectedsalary: 0,
}

type Action = {
    type: TypeAction,
    payload: TypeProps
}

function addUserReducer(state = initialState, action: Action)
{
    switch (action.type)
    {
        case TypeAction.SET_ADDUSER:
            return {
                ...action.payload
            }
        case TypeAction.RESET_ADDUSER:
            return initialState
        default:
            return state
    }
}

export default addUserReducer