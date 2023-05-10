export async function getData(URL) {
  try {
    const response = await fetch(URL);
    let ans = await response.json();
    return ans;
  } catch (error) {
    throw new Error(await response.json().error);
  }
}

export async function updateCityInCache(cache, name, URL) {
  const data = await getData(URL);
  cache[findIndexCityInCache(cache, name)].data = data;
  cache[findIndexCityInCache(cache, name)].time = new Date().getHours();
  renderWeather(data, name);
  saveToLocalStorage('cache', cache);
}

export function loadCityFromCache(cache, name) {
  renderWeather(cache[findIndexCityInCache(cache, name)].data, name);
}

export function timeConverter(UNIX_timestamp, timezone) {
  const date = new Date((UNIX_timestamp + timezone) * 1000);
  const normalTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
  return normalTime;
}

export function getNormalCityName(cityName) {
  return cityName.split('')[0].toUpperCase() + cityName.slice(1);
}

export function cityExistsInCache(cache, name) {
  const now = new Date().getHours();
  const cityExist = cache.find(item => item.city.toLowerCase() === name) !== undefined;
  let dateGood = false;
  for (let i = 0; i < cache.length; i++) {
    if (cache[i].time === now) {
      dateGood = true;
      break;
    }
  }
  return [cityExist, dateGood];
}

export function findIndexCityInCache(cache, name) {
  name = name.toLowerCase();
  const index = cache.findIndex(item => item.city === name);
  return index;
}

export function saveToLocalStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

export const findCityIndex = (list, name) => {
  name = name.toLowerCase();
  return list.findIndex(c => c.name === name);
}

export const isEmpty = cityName => cityName.trim();

