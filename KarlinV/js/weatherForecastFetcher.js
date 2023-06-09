const serverUrlForecast = `http://api.openweathermap.org/data/2.5/forecast`;
// const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
// const serverUrlForecast = `http://api.openweathermap.org/data/2.5/weather`;
const apiKey = "5d14a0541969bfa699b8bba3100075ed";
const FORECAST_NUMBER_OF_DAYS = 5;

export const getDataWeather = async (cityName) => {
  const urlForecast = `${serverUrlForecast}?q=${cityName}&cnt=${FORECAST_NUMBER_OF_DAYS}&appid=${apiKey}`;
  try {
    const response = await fetch(urlForecast);
    if (!response.ok) {
      throw new Error("Unable to fetch weather data. Please try again later.");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    // alert(error.message);
  }
};
