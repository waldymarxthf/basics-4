import {cache} from './variables.mjs'

export async function getData(URL) {
  try {
    const response = await fetch(URL);
    let ans = await response.json();
    return ans;
  } catch (error) {
    throw new Error(await response.json().error);
  }
}

export function timeConverter(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp * 1000);
  const hour = a.getHours();
  const min = a.getMinutes();
  return hour + ':' + min;
}

export function getNormalCityName(cityName) {
  return cityName.split('')[0].toUpperCase() + cityName.slice(1);
}

export function cityExistsInCache(name) {
  const now = new Date().getHours();
  const cityExist = cache.some(item => item.data.name.toLowerCase() === name);
  const dateGood = cache.some(item => item.time === now);
  return [cityExist, dateGood];
}

export function findIndexCityInCache(name) {
  name = name.toLowerCase();
  const index = cache.findIndex(item => item.city === name);
  return index;
}

export function saveToLocalStorage() {
  localStorage.setItem('cache', JSON.stringify(cache))
}
