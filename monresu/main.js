const inputNameNode = document.querySelector('.input-name');
const formSendNameNode = document.querySelector('form');
const resultNode = document.querySelector('.result');

const serverUrl = 'https://api.genderize.io';

let people = [];

const saveToLocalStorage = () => {
  localStorage.setItem('people', JSON.stringify(people));
}

const loadFromLocalStorage = () => {
  const res = localStorage.getItem('people');
  people = res ? JSON.parse(res) : [];
}

const getURL = (name) => `${serverUrl}?name=${name}`;

const nameIsCorrect = (name) => {
  const index = people.findIndex(person => person.name.toLowerCase() === name.toLowerCase());
  if (index !== -1) return 0;
  return 1;
}

function createPersonNode(person) {
  const paragraph = document.createElement('p');
  paragraph.textContent = `${person.name} is ${person.gender}. Popular is: ${person.count}`;
  paragraph.classList.add('person')
  paragraph.addEventListener('click', () => {
    const index = people.indexOf(person);
    people.splice(index, 1);
    saveToLocalStorage();
    render();
  })
  return paragraph;
}

function render() {
  resultNode.innerHTML = '';
  people.forEach((person) => {
    const paragraph = createPersonNode(person);
    resultNode.append(paragraph);
  }); 
}

const clearInput = () => {
  inputNameNode.value = '';
  return;
}

const ERRORS = {
  nameIsNotExist: new Error('Имя не существует!'),
  nameIsExist: new Error('Имя уже есть в списке!'),
};

async function clickHandler(e) {
  e.preventDefault();
  const name = inputNameNode.value;
  clearInput();
  if (nameIsCorrect(name)) {
    const url = getURL(name)
    const response = await fetch(url);
    let answer = await response.json();
    if (!answer.gender) { 
      console.error(ERRORS.nameIsNotExist);
      return;
    }
    people.push(answer);
    saveToLocalStorage();
    render();
    return;
  } else {
    console.error(ERRORS.nameIsExist)
    render();
    return;
  }
}

loadFromLocalStorage();
render();
formSendNameNode.addEventListener('submit', clickHandler)