const searchForm = document.querySelector(".search_form");
const searchInput = document.querySelector(".search_input");

const nowTemperature = document.querySelector(".now_temperature");
const nowCityName = document.querySelector(".now_city_name");
const nowIcon = document.querySelector(".now_icon_img")

const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";

async function formHandler(event) {
  try {
    event.preventDefault();

    const city = searchInput.value;
    const url = `${serverUrl}?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    if (response.ok) {
      const answer = await response.json();

      console.log(answer);
      nowTemperature.textContent = `${Math.round(answer.main.temp)}°`;
      nowCityName.textContent = answer.name;
			nowIcon.src = `https://openweathermap.org/img/wn/${answer.weather[0].icon}@4x.png`

      searchInput.value = "";
    } else {
      throw new Error((await response.json()).message);
    }
  } catch (error) {
    alert(error.message);
  }
}

searchForm.addEventListener("submit", (event) => formHandler(event));
