import moment from 'moment'

export function setMoment(value: string)
{
    return moment(value, 'MM/DD/YY')
}

export function formatMoment(value: string)
{
    return moment(value).format('MM/DD/YY')
}

export function numberMoment(value: string)
{
    return moment(value, 'MM/DD/YY').unix()
}