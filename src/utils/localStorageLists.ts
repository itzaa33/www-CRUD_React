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