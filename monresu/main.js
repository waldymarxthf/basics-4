const inputNameNode = document.querySelector('.input-name');
const btnSendNameNode = document.querySelector('.btn-send-name');
const resultNode = document.querySelector('.result p');

const serverUrl = 'https://api.genderize.io';

const getURL = (name) => `${serverUrl}?name=${name}`;

async function clickHandler() {
  const url = getURL(inputNameNode.value)
  const response = await fetch(url);
  let answer = await response.json();
  console.log(`${answer.name} is ${answer.gender}`);
}

btnSendNameNode.addEventListener('click', clickHandler)