import {tabsContainerNode, tabNodes, tabContentNodes, form, inputCityNode} from './modules/variables.mjs'
import {serverURL, apiKey} from './modules/variables.mjs'
import {getData, DOMchange} from './modules/functions.mjs'

tabsContainerNode.addEventListener('click', event => tabsContainerNodeHandler(event));

function tabsContainerNodeHandler(event) {
  if (!event.target.classList.contains('tabs__item')) return;
  const index = Array.from(tabNodes).indexOf(event.target);

  tabNodes.forEach(tab => tab.classList.remove('active'));
  tabContentNodes.forEach(content => content.classList.remove('active'));
  tabNodes[index].classList.add('active');
  tabContentNodes[index].classList.add('active');
}

async function formHandler(event) {
  event.preventDefault();

  const cityName = inputCityNode.value;
  const URL = `${serverURL}?q=${cityName}&appid=${apiKey}`;
  const data = await getData(URL);

  form.reset();

  if ('message' in data) {
    alert('Города нет');
    return;
  };

  DOMchange(data, cityName)
}

form.addEventListener('submit',  (event) => formHandler(event));