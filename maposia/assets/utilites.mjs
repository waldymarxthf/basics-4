function convertUnix(timestamp, timezone) {
    return ((timestamp + timezone) * 1000)
}

function convertTime(timestamp, timezone = 0) {
    const date = new Date(convertUnix(timestamp, timezone))
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC'
    }
    return date.toLocaleTimeString([], options)
}

function convertDate(timestamp, timezone = 0) {
    const date = new Date(convertUnix(timestamp, timezone))
    const options = {
        day: '2-digit',
        month: 'long'
    }
    return date.toLocaleDateString([], options)
}

function getUrlIcon(id) {
    return `https://openweathermap.org/img/wn/${id}@2x.png`
}

export {
    convertTime,
    getUrlIcon,
    convertDate
}