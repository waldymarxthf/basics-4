const inputValue = document.querySelector('.inputName');
const button = document.querySelector('.btn');
const form = document.querySelector('.form');


function getRequest() {
    const firstName = inputValue.value;
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;
    
    fetch(url)
        .then(response => response.json()) 
        .then(data => alert(`${firstName} - ${data.gender}`));

}

function clearInpt() {
    inputValue.value = '';
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    getRequest();
    clearInpt();
})