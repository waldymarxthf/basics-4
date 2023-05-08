import {
  tabs,
  windows,
  form,
  input,
  serverUrl,
  apiKey,
} from "./modules/constants.mjs";
import { renderInfo } from "./modules/functions.mjs";

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
	for (const tab of tabs) tab.classList.remove('active')
	for (const window of windows) window.classList.remove('active')
	tabs[index].classList.add('active')
	windows[index].classList.add('active')
  });
});

async function getData() {
  const cityName = input.value;
  const response = await fetch(`${serverUrl}?q=${cityName}&appid=${apiKey}`);
  try {
    if (response.ok) {
      const data = await response.json();
      return data;
    } else throw Error("Ошибка получения данных");
  } catch(e) {
    alert(e);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getData().then((data) => renderInfo(data));
});
