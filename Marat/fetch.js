const city = document.querySelector(".input");
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'afc9f2df39f9e9e49eeb1afac7034d35';
export async function fetchServer() {
    const url = `${serverUrl}?q=${city.value}&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;


}
export async function fetchLikes(p){
    const url = `${serverUrl}?q=${p.textContent}&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    
    return data;

}
export async function calculations() {
    const data = await fetchServer();
    const gender = Math.floor(data.main.temp - 273);
    const feels_Like = Math.floor(data.main.feels_like - 273);
    const Weather = data.weather[0].main;

    const sunrise = data.sys.sunrise;
    const datesr = new Date(sunrise * 1000);
    const dates = datesr.getHours() + ":" + datesr.getMinutes();

    const sunset = data.sys.sunset;
    const datess = new Date(sunset * 1000);
    const dateess = datess.getHours() + ":" + datess.getMinutes();
    let array = [gender, feels_Like, Weather, dates, dateess];
    return array;
}