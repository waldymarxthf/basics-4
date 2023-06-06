import {compareAsc, format} from 'date-fns'
import {utcToZonedTime} from 'date-fns-tz'

function convertUnix(timestamp, timezone) {
    return ((timestamp + timezone) * 1000)
}

function convertTime(timestamp, timezone = '') {
    const date = new Date(convertUnix(timestamp, timezone))
    console.log(convertUnix(timestamp, timezone))
    const newTime = utcToZonedTime(timestamp * 1000, timezone)
    console.log(newTime)
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC'
    }
    return date.toLocaleTimeString([], options)
}

function convertDate(timestamp, timezone = '') {
    return format(new Date(convertUnix(timestamp, timezone)), 'd MMM')

}

function getUrlIcon(id) {
    return `https://openweathermap.org/img/wn/${id}@2x.png`
}

export {
    convertTime,
    getUrlIcon,
    convertDate
}