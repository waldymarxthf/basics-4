//* функция сохранения списка городов в localStorage

export function saveFavoriteCitiesInlocalStorage(cities) {
  const cityList = JSON.stringify(cities);
  localStorage.setItem('favoriteCities', cityList);
}

//* функция получения списка городов из localStorage

export function getFavoriteCitiesFromlocalStorage() {
  const cityList = localStorage.getItem('favoriteCities');
  const result = JSON.parse(cityList);
  return result || [];
}

//* функция сохранения актуального города в localStorage

export function saveCurrentCityInLocalStorage(cityName) {
  localStorage.setItem('currentCity', cityName);
  document.cookie = `city=${encodeURIComponent(cityName)}; max-age=3600`;
}

//* функция получения актуального города в localStorage

export function getCurrentCityFromlocalStorage() {
  // return localStorage.getItem('currentCity') || 'Vladivostok';
  const name = 'Vladivostok';
  const matches = document.cookie.match(
    new RegExp(
      `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`,
    ),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
