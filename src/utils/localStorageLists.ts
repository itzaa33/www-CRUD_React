import * as TypeAddUser from '../redux/ListsUser/type'
import { TypeLists } from '../components/Lists'

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

export function deleteUser(users: TypeLists[], oldData: TypeAddUser.TypeProps)
{
    let arrayOldData = oldData

    users.map(user =>
    {
        arrayOldData = arrayOldData.filter(item => item.id !== user.id)
    })

    return arrayOldData
}

export function updateUser(user: TypeAddUser.TypeUser, oldData: TypeAddUser.TypeProps)
{
    const arrayOldData = oldData.map(item =>
    {
        if (item.id === user.id)
        {
            return user
        }

        return item
    })

    return arrayOldData
}