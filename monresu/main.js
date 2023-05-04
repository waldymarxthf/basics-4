const inputNameNode = document.querySelector('.input-name');
const formSendNameNode = document.querySelector('form');
const resultNode = document.querySelector('.result');

const serverUrl = 'https://api.genderize.io';

let names = [];

function setToLocalStorage(nams) {
  localStorage.setItem('names', JSON.stringify(nams));
  return;
}

function getFromLocalStorage() {
  const storedNames = JSON.parse(localStorage.getItem('names'));
  return storedNames === null ? [] : storedNames;
} 


const getURL = (name) => `${serverUrl}?name=${name}`;

function render() {
  resultNode.innerHTML = '';
  names.forEach(person => {
    const el = document.createElement('p');
    el.innerText = `${person.name} is ${person.gender}. Popular is: ${person.count}`;
    resultNode.append(el);
    el.addEventListener('click', () => {
      const i = names.indexOf(person);
      names.splice(i, 1);
      setToLocalStorage(names);
      resultNode.removeChild(el);
      render();
    });
  }) 
}

async function clickHandler(e) {
  e.preventDefault();
  console.log('names before push:', names);
  const url = getURL(inputNameNode.value)
  const response = await fetch(url);
  let answer = await response.json();
  resultNode.innerText += `${answer.name} is ${answer.gender}. Popular is: ${answer.count} \n`;
  inputNameNode.value = '';
  names.push(answer);
  setToLocalStorage(names);
}

names = getFromLocalStorage();
render();
formSendNameNode.addEventListener('submit', clickHandler)