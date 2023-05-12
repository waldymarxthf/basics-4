export function saveLocation(locations) {
  localStorage.setItem("newLocation", JSON.stringify(locations));
}

export function loadLocations(locations) {
  const addedLocations = JSON.parse(localStorage.getItem("newLocation"));
  locations.push(...addedLocations);
}

export function saveLastLocation(location) {
  localStorage.setItem("lastLocation", JSON.stringify(location));
}

export function loadLastLocation(location) {
  const lastLocation = localStorage.getItem("lastLocation");
  return lastLocation ? JSON.parse(lastLocation) : null;
}
