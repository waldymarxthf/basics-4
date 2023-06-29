const parentNode = document.querySelector('.display');
const inputNode = document.querySelector('.form__input');
const formNode = document.querySelector('.form');

const anotherForm = document.querySelector('.form-another');
const inputAn = document.querySelector('.form__input-another');

const SELECT = {
    ME: 'Me',
    ANOTHER: 'Another'
}

const messageList = [];

function addMessage(text) {
    inputNode.value ? messageList.push(text) : false;
    inputAn.value ? messageList.push(text) : false;
}

class Message {
    constructor(name, text, date, select) {
        this.name = name,
        this.text = text,
        this.date = date,
        this.select = select
    }
}

function addUserMessage(event) {
    event.preventDefault();
    const userMessage = inputNode.value;
    const newUserMessage = new Message('Me:', userMessage, '15:37', SELECT.ME);
    addMessage(newUserMessage);
    render();
    this.reset()
    console.log(messageList);
}

function addAnotherMess(event) {
    event.preventDefault();
    const anotherInput = inputAn.value
    const anotherUser = new Message('Another', anotherInput, '15:22', SELECT.ANOTHER);
    addMessage(anotherUser);
    render();
    this.reset()
    console.log(messageList);
}

function createMessageElement(text, select) {
    const nodeElement = document.createElement('div');
    nodeElement.classList.add('me');
    nodeElement.textContent = text;
    parentNode.appendChild(nodeElement);
    return parentNode;
}

function createMessageElementLeft(text, select) {
    const nodeElement = document.createElement('div');
    nodeElement.classList.add('display-items__message');
    nodeElement.textContent = text;
    parentNode.appendChild(nodeElement);
    return parentNode;
}

function render() {
    parentNode.textContent = '';
    for (let obj of messageList) {
        obj.select == SELECT.ME ?
        createMessageElement(obj.text, obj.select) :
        createMessageElementLeft(obj.text, obj.select);
        
    }
}

formNode.addEventListener('submit', addUserMessage);
anotherForm.addEventListener('submit', addAnotherMess);

render();