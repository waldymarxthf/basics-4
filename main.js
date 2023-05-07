const container = document.querySelector('.container')
const inputForm = document.querySelector('.input')
const gender = document.querySelector('.gender')
const answer = document.querySelector('.answer')

const serverUrl = 'https://api.genderize.io'

function showGender(person) {
    gender = (person.gender)?gender.textContent = person.gender:
        gender.textContent = 'maybe you\'re an animal or out of control'
}

async function takeGender(url){
    let response = await fetch(url)
    let person = await response.json()  
    showGender(person)
}

container.addEventListener('submit', (event) => {
    event.preventDefault()
    const firstName = inputForm.value
    const url = `${serverUrl}?name=${firstName}`;
    takeGender(url)
})
