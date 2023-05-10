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
  console.log(cityExist);
  console.log(dateGood)
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
  return list.findIndex(c => c.name === name);
}

export const isEmpty = cityName => cityName.trim();

