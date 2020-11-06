import moment from 'moment'

export function setMoment(value: number)
{
    var format = formatMoment(value)

    return moment(format, 'MM/DD/YY')
}

function formatMoment(value: number)
{
    return moment(value).format('MM/DD/YY')
}

export function yearsMoment(value: number)
{
    const parse = parseInt(moment(value).format('YYYY'))
    
    return parse
}


