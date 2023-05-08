function getElement(tag) {
    return document.querySelector(tag)
}

const nowBtn = getElement('.weather-now-btn')
const detailsBtn = getElement('.weather-details-btn')
const forecastBtn = getElement('.weather-forecast-btn')
const displayNow = getElement('.weather-display-now')
const displayDetails = getElement('.weather-display-details')
const displayForecast = getElement('.weather-display-forecast')
export {nowBtn, detailsBtn, forecastBtn, displayNow, displayDetails, displayForecast}