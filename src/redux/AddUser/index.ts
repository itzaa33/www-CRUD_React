import { TypeProps, TypeAction } from './type'
import moment from 'moment'

const initialState: TypeProps = {
    title: 'Mr',
    name: '',
    lastname: '',
    birthday: moment().format('MM/DD/YY'), 
    nationality: 'Thai',
    citizenid: ['','','','',''],
    gender: 'Male',
    phonenumber:['+66',''],
    passport: '',
    expectedsalary: '0',
}

export type Action = {
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
            return {
                ...initialState,
                citizenid: ['','','','',''],
                phonenumber:['+66',''],
            }
        default:
            return state
    }
}

export default addUserReducer