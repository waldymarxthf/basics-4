export function saveLocationToLocalStorage(locations) {
	localStorage.setItem('newLocation', JSON.stringify(locations))
}

export function loadLocations(locations) {
	const oldLocations = JSON.parse(localStorage.getItem('newLocation'))
	locations.push(...oldLocations)
}