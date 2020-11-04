import { TypeAction, TypeProps } from './type'

export function setAddUser(payload: TypeProps)
{
    return { type: TypeAction.SET_ADDUSER, payload: payload }
}

export function resetAddUser()
{
    return { type: TypeAction.RESET_ADDUSER }
}