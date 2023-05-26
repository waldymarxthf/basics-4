
export const STORAGE = {

    saveFavoriteCities(key, favoriteCities) {
        const date = JSON.stringify(favoriteCities);
        localStorage.setItem(key, date);
    },

    getFavoriteCities(key) {
        const date = localStorage.getItem(key)
        return JSON.parse(date);
    },

    saveCurrentCity(key, nameCity) {
        const date = JSON.parse(nameCity);
        localStorage.setItem(key, date);
    },

    getCurrentCity(key) {
        return  JSON.parse(localStorage.getItem(key))
    }
}