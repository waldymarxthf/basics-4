const qS = (element) => document.querySelector(element);
const input = qS(".input-name");
const form = qS(".main-form");

async function showGender(event) {
    event.preventDefault()
    const firstName = input.value;
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;

    let response = await fetch(url);
    if (response.ok) {
        let json = await response.json();
        alert(json.name + ' is ' + json.gender);
    } else {
    alert("Ошибка HTTP: " + response.status);
    }
    form.reset();
}

form.addEventListener("submit", showGender);
