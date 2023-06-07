import {favoriteCities} from "./main.js";
import { UI_ELEMENTS } from "./variables.js";
import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";


//* функция проверки на пустую строку

export function isInputEmpty(name) {
  return !name.trim();
}

//* функция поиска индекса в массиве

export function findIndex(name) {
  return favoriteCities.findIndex((item) => item.location === name);
}

//* функция проверки наличия города в массиве

export function isCityExist(name) {
  return favoriteCities.find((item) => item.location === name);
}

// * функция конвертирования времени из unix-формата

export function convertUnixTime(time, timezone) {

  const date = new Date((time + timezone) * 1000);
  const correctTime = utcToZonedTime(date, "UTC");
  const localTime = format(correctTime, "HH:mm");

  // const localDate = date.toLocaleString("en-GB", {
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   timeZone: "UTC",
  // });

  return localTime;
}

// * функция очистки поля ввода города

export function cleanInput() {
  UI_ELEMENTS.FORM.reset();
}