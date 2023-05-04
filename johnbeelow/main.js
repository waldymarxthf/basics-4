const UI_ELEMENTS = {
  INPUT_FORM: document.querySelector('.input_form'),
  INPUT_TEXT: document.querySelector('.input_text'),
  RESULT_NAME: document.querySelector('.result_name'),
}

async function checkName(name) {
  const firstName = name[0].toUpperCase() + name.slice(1)
  const serverUrl = 'https://api.genderize.io'
  const url = `${serverUrl}?name=${firstName}`
  let response = await fetch(url)
  let result = await response.json()
  render(`${firstName} is ${result.gender}`)
}

const render = (result) => 
UI_ELEMENTS.RESULT_NAME.textContent = result

UI_ELEMENTS.INPUT_FORM.addEventListener('submit', (event) => {
  event.preventDefault()
  checkName(UI_ELEMENTS.INPUT_TEXT.value)
})
