import { TypeAction, TypeProps } from './type'

export function setAddUser(payload: TypeProps)
{
    return { type: TypeAction.SET_ADDUSER, payload: payload }
}