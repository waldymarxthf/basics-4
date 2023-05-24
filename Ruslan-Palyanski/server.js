
import {storage} from "./storage.js";

const serverData = {
    serverUrl: 'http://api.openweathermap.org/data/2.5/weather',
    apiKey: 'afc9f2df39f9e9e49eeb1afac7034d35',
    // 'f660a2fb1e4bad108d6160b7f58c555f'
    serverImg: 'https://openweathermap.org/img/wn/',
    serverForecastUrl: 'http://api.openweathermap.org/data/2.5/forecast',
}

function createUrl(serverUrl, cityName, apiKey){
    return `${serverUrl}?q=${cityName}&appid=${apiKey}`;
}

function createLoader(){
    const loader = document.createElement('div');
    loader.classList.add('loader')
    loader.textContent = 'loading';
    document.body.prepend(loader)
}

function removeLoader(){
    const loader = document.querySelector('.loader');
    loader.remove()
}

async function getData(city){
    createLoader()
    const cityName = city;
    
    const url = createUrl(serverData.serverUrl, cityName, serverData.apiKey);
    
    const data = await fetch(url)
                       .then(response => {
                           if(response.ok){
                               return response.json();
                           }
                           return Promise.reject(new Error(response.status));
                       })
                       .then(data => data)
                       .catch(error => alert(error))


    const forecastUrl = createUrl(serverData.serverForecastUrl, cityName, serverData.apiKey);
    const data1 = await fetch(forecastUrl)
                        .then(response => {
                            if(response.ok){
                                return response.json();
                            }
                            return Promise.reject(new Error(response.status));
                        })
                        .then(data => data)
                        .catch(error => alert(error))

    const [dataP1, dataP2] = await Promise.all([data, data1])
                    .then(data => data)
                    .catch(error => alert(error))
                    .finally(() => removeLoader())
    
    return [dataP1, dataP2];
}

export {serverData, getData};