const qS = (element) => document.querySelector(element);
const input = qS(".input-name");
const form = qS(".main-form");

async function showGender(event) {
    event.preventDefault()
    const firstName = input.value;
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;
    try {
        let response = await fetch(url);
        let json = await response.json();
        alert(json.name + ' is ' + json.gender);
    } catch(err) {
        alert(err);
    }
}
    form.reset();
//     fetch(url)
//     .then(response => response.json())
//     .then(data => alert(`${data.name} is ${data.gender}`))
//     .catch(error => alert(`Error: ${error.message}`));

//   form.reset();

form.addEventListener("submit", showGender);
