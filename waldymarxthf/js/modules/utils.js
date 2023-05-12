export function timeConverter(time, timezone) {
	const newDate = new Date((time + timezone) * 1000)
	const localDate = newDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
	return localDate
}

//* функция конвертации unix времени в обычное

export function timeForecastConverter(time) {
	const timezone = new Date(time).getTimezoneOffset() * 60
	const newDate = new Date((time) * 1000)
	const localDate = newDate.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit'} + (timezone * 1000))
	// const localTime = new Date(localDate)
	return localDate
}

export function findLocationIndex(locations, newLocation) {
	return locations.findIndex(el => el.location === newLocation.textContent)
}

//* функция нахождения локации из массива

export function errorHandler(error) {
	alert(error.message)
	console.error(error.message)
}

//* функция для обработчика ошибок