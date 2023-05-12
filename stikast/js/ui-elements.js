export {
  searchForm,
  searchInput,
  nowTemperature,
  nowCityName,
  nowIcon,
  likeButton,
	like,
  addedLocationsList,
  tabs,
  screens,
	detailsTitle,
	detailsTemperature,
	detailsFells,
	detailsWeather,
	detailsSunrise,
	detailsSunset,
};

const searchForm = document.querySelector(".search_form");
const searchInput = document.querySelector(".search_input");

const nowTemperature = document.querySelector(".now_temperature");
const nowCityName = document.querySelector(".now_city_name");
const nowIcon = document.querySelector(".now_icon_img");

const likeButton = document.querySelector(".now_city_like");
const like = document.querySelector(".like")
const addedLocationsList = document.querySelector(".added-locations_list_items");

const tabs = document.querySelectorAll(".menu-button");
const screens = document.querySelectorAll(".main-screen-item");

const detailsTitle = document.querySelector(".details_title")
const detailsTemperature = document.querySelector(".details_temperature");
const detailsFells = document.querySelector(".details_fells");
const detailsWeather = document.querySelector(".details_weather");
const detailsSunrise = document.querySelector(".details_sunrise");
const detailsSunset = document.querySelector(".details_sunset");