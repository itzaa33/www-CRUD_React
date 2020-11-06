import * as TypeAddUser from '../redux/ListsUser/type'

export function addUser(user: TypeAddUser.TypeUser, oldData: TypeAddUser.TypeProps)
{
    if (Array.isArray(oldData))
    {
        const array = [...oldData, user]

        return array
    }
    else
    {
        return [user]
    }

}