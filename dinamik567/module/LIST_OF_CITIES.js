import {STORAGE} from "./STORAGE.js";

// export const listCities = STORAGE.getFavoriteCities('list');
//


const arrayCity = new Set();
updateCityArray()

export const listCities = Array.from(arrayCity);


export function addCityInListCities(cityName) {
    // let index = listCities.findIndex(city => city.cityName === cityName)
    // if (!index) {
    //     return;
    // }
    //
    // listCities.push({cityName});

    arrayCity.add(cityName);

    STORAGE.saveFavoriteCities('listCities', Array.from(listCities));
}


export function removeCityInListCities(cityName) {
    // let index = listCities.findIndex(city => city.cityName === cityName)
    // if (index !== -1){
    //     listCities.splice(index, 1);
    // }

    arrayCity.delete(cityName)
    STORAGE.saveFavoriteCities('listCities', Array.from(listCities));
}

function updateCityArray() {
    Array
        .from(STORAGE.getFavoriteCities('list'))
        .map(obj => arrayCity.add(obj.cityName));
}