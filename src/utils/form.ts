import { numberMoment } from '../utils/moment'

export function checkLength(value: string, length: number)
{
    if (value.length > length)
    {
        return false
    }

    return true
}

export function checkBrithday(value: string)
{
    const date = new Date
    const currentYear  = new Date().getFullYear()
    const valueYear  = new Date(numberMoment(value)).getFullYear()
console.log(valueYear)
    if (numberMoment(value) < currentYear)
    {
        return false
    }

    return true
}

export function checkCitizenid(value: string[])
{
    const join = value.join('')

    if (join.length === 13)
    {
        return false
    }

    return true
}

export function checkPhonenumber(value: string[])
{
    const join = value.join('')

    if (join.length === 12)
    {
        return false
    }

    return true
}

export function checkPassport(value: string)
{
    if (value.length > 0)
    {
        const form1 = /[A-Z]{1}[0-9]{8}/
        const form2 = /[A-Z]{2}[0-9]{7}/

        if (value.length === 9)
        {
            if (form1.test(value) || form2.test(value))
            {
                return false
            }
        }

        return true
    }

    return false
}
