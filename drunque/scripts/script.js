function searchHandler(event) {
  event.preventDefault();

  const form = event.target;

  const cityName = form.querySelector(`input[type="text"]`).value;
  getWeatherData(getUrl(cityName)).then(render, console.error);
}

function getUrl(cityName) {
  const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
  const apiKey = "f6f1b811662377c12bd1cf188819bbdc";

  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
  return url;
}

function render(data) {
  const nowTab = document.querySelector("#now");
  const nowTemp = nowTab.querySelector("#now-temp");
  const nowImage = nowTab.querySelector("#weather-image");
  const nowCity = nowTab.querySelector("#now-city");

  const favorite = nowTab.querySelector("button");
  favorite.textContent = saved.some((item) => data.name === item)
    ? "favorite"
    : "favorite_border";

  nowTemp.textContent = Math.round(+data.main.temp) + "°";
  nowImage.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
  nowCity.textContent = data.name;

  const detailsTab = document.querySelector("#details");

  const detailsCity = detailsTab.querySelector("#details-city");
  detailsCity.textContent = data.name;

  const detailsTemp = detailsTab.querySelector("#details-temp");
  detailsTemp.textContent = Math.round(+data.main.temp) + "°";

  const detailsFeelsLike = detailsTab.querySelector("#feels-like");
  detailsFeelsLike.textContent = Math.round(+data.main["feels_like"]) + "°";

  const detailsWeatherType = detailsTab.querySelector("#weather-type");
  detailsWeatherType.textContent = data.weather[0].main;

  const detailsSunrise = detailsTab.querySelector("#sunrise-time");
  detailsSunrise.textContent = getTime(data.sys.sunrise, data.timezone / 3600);
  detailsSunrise.textContent += ` (${getTime(data.sys.sunrise)})`;
  const detailsSunset = detailsTab.querySelector("#sunset-time");
  detailsSunset.textContent = getTime(data.sys.sunset, data.timezone / 3600);
  detailsSunset.textContent += ` (${getTime(data.sys.sunset)})`;
}

function getTime(unix, timeZone) {
  const currentTimeZone = Math.abs(new Date().getTimezoneOffset() / 60);
  timeZone = timeZone ?? currentTimeZone;

  const difference = timeZone - currentTimeZone;

  const date = new Date(unix * 1000);
  const hours = String((24 + date.getHours() + difference) % 24).padStart(
    2,
    "0"
  );

  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

async function getWeatherData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (["4", "5"].includes(data.cod.toString()[0]))
      return Promise.reject(data.message);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
}

const form = document.querySelector("form");
form.addEventListener("submit", searchHandler);

getWeatherData(getUrl("Aktobe")).then(render, console.error);

const historyNode = document.querySelector(".history-list");
historyNode.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const historyCityNode = event.target.closest(".history-city");
    const cityName = historyCityNode.querySelector("p").textContent
    historyCityNode.remove();
    saved.splice(saved.indexOf(cityName), 1)

    if (document.querySelector("#now-city").textContent === cityName) {
      const favoriteButton = document.querySelector("#now button")
      favoriteButton.textContent = "favorite_border"
    }
  }

  if (
    event.target.classList.contains("history-city") ||
    event.target.tagName === "P"
  ) {
    const cityName =
      event.target.querySelector("p")?.textContent || event.target.textContent;
    getWeatherData(getUrl(cityName)).then(render, console.error);
  }
});

const favoriteButton = document.querySelector("#now button");
favoriteButton.addEventListener("click", (event) => {
  favoriteButton.textContent = ["favorite", "favorite_border"].find(
    (item) => item !== favoriteButton.textContent
  );

  const nowTab = document.querySelector("#now");
  const cityName = nowTab.querySelector("#now-city").textContent;
  const historyNode = document.querySelector(".history-list");

  if (favoriteButton.textContent === "favorite") {
    const historyCityNode = document.createElement("div");
    historyCityNode.classList.add("history-city");
    historyCityNode.setAttribute("data-city", cityName);

    const cityNode = document.createElement("p");
    cityNode.textContent = cityName;
    saved.push(cityName);
    const button = document.createElement("button");
    button.classList.add("material-icons");
    button.textContent = "clear";

    historyCityNode.append(cityNode, button);
    historyNode.append(historyCityNode);
  } else {
    const historyCityNode = historyNode.querySelector(
      `.history-city[data-city="${cityName}"]`
    );
    historyCityNode.remove();
    saved.splice(saved.indexOf(cityName), 1);
  }
});

const saved = [];
