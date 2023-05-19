const button_now = document.querySelector(".now");
const button_details = document.querySelector(".details");
const button_forecast = document.querySelector(".forecast");
const left_content_temperature = document.querySelector(".left_content_temperature");
const left_content_temperature2 = document.querySelector(".left_content_temperature2");
const left_content_temperature3 = document.querySelector(".left_content_temperature3");
const right_bottom_content = document.querySelector(".right_bottom_content");
const serdce = document.querySelector(".serdce");
const list = [];

if (localStorage.getItem('right_bottom_content')) {
    right_bottom_content.innerHTML = localStorage.getItem('right_bottom_content');
}


left_content_temperature.style.display = "";
left_content_temperature2.style.display = "none";
left_content_temperature3.style.display = "none";
console.log(right_bottom_content);


button_now.addEventListener("click", function () {
    left_content_temperature.style.display = "";
    left_content_temperature2.style.display = "none";
    left_content_temperature3.style.display = "none";
    localStorage.setItem("displayType", "now");
})
button_details.addEventListener("click", function () {
    left_content_temperature.style.display = "none";
    left_content_temperature2.style.display = "";
    left_content_temperature3.style.display = "none";
    localStorage.setItem("displayType", "details");
})
button_forecast.addEventListener("click", function () {
    left_content_temperature.style.display = "none";
    left_content_temperature2.style.display = "none"
    left_content_temperature3.style.display = "";
    localStorage.setItem("displayType", "forecast");
});
function button() {
    const displayType = localStorage.getItem("displayType");
    if (displayType === "now") {
        left_content_temperature.style.display = "";
        left_content_temperature2.style.display = "none";
        left_content_temperature3.style.display = "none";
    } else if (displayType === "details") {
        left_content_temperature.style.display = "none";
        left_content_temperature2.style.display = "";
        left_content_temperature3.style.display = "none";
    } else if (displayType === "forecast") {
        left_content_temperature.style.display = "none";
        left_content_temperature2.style.display = "none";
        left_content_temperature3.style.display = "";
    }
}
window.addEventListener("load", button);



const city = document.querySelector(".input");
const form = document.querySelector(".head_content");
const Aktobe = document.querySelector(".Aktobe");
const left_content_temperature2_Aktobe = document.querySelector(".left_content_temperature2_Aktobe");
const Details_Temperature = document.querySelector(".Details_Temperature");
const Details_Feels = document.querySelector(".Details_Feels");
const Details_Weather = document.querySelector(".Details_Weather");
const Details_Sunrise = document.querySelector(".Details_Sunrise");
const Details_Sunset = document.querySelector(".Details_Sunset");
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const text_temperature = document.querySelector(".text_temperature");
const apiKey = 'afc9f2df39f9e9e49eeb1afac7034d35';

async function addLocation(e) {
    e.preventDefault();
    console.log(city.value);
    Aktobe.textContent = city.value;
    left_content_temperature2_Aktobe.innerHTML = city.value;
    const url = `${serverUrl}?q=${city.value}&appid=${apiKey}`;
    console.log(url);
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const gender = Math.floor(data.main.temp - 273);
        const feels_Like = Math.floor(data.main.feels_like - 273);
        const Weather = data.weather[0].main

        const sunrise = data.sys.sunrise;
        const datesr = new Date(sunrise * 1000);
        const dates = datesr.getHours() + ":" +  datesr.getMinutes();

        const sunset = data.sys.sunset;
        const datess = new Date(sunset * 1000);
        const dateess = datess.getHours() + ":" +  datess.getMinutes();

        console.log(gender);
        console.log(feels_Like);
        console.log("Weather = " +  Weather);
        console.log(dates);
        console.log(dateess);
        text_temperature.innerHTML = gender + "&#176";
        Details_Temperature.innerHTML = "Temperature: " +  gender + "&#176";
        Details_Feels.innerHTML = "Feels like: " + feels_Like + "&#176";
        Details_Weather.innerHTML = "Weather: " + Weather;
        Details_Sunrise.innerHTML = "Sunrise: " + dates;
        Details_Sunset.innerHTML = "Sunset: " + dateess;
        if (!response.ok) {
            throw new Error("ошибка");
        }

    } catch (error) {



    }
}

const ul = document.createElement("ul");

function createElement(nameCity) {
    right_bottom_content.innerHTML = ""
    const li = document.createElement("li");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    p.innerHTML = city.value;
    p2.innerHTML = "&#215";

    li.classList.add("liCity");
    p.classList.add("p");
    p2.classList.add("p2");

    li.appendChild(p);
    li.appendChild(p2);
    console.log(li);
    ul.appendChild(li);
    right_bottom_content.appendChild(ul);

    p2.addEventListener("click", function () {
        li.remove();
    });
    p.addEventListener("click", Likes);
    
    localStorage.setItem("right_bottom_content", right_bottom_content.innerHTML);

}
async function Likes(event) {
    const p = event.target
    console.log(p);
    Aktobe.textContent = p.textContent;
    console.log(p.textContent)
    const url = `${serverUrl}?q=${p.textContent}&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const gender = Math.floor(data.main.temp - 273);
    console.log(gender - 273);
    text_temperature.innerHTML = gender + "&#176";
}
serdce.addEventListener("click", createElement);
form.addEventListener("submit", addLocation);

