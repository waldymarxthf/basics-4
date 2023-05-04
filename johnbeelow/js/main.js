import { UI_ELEMENTS, createTag, CLASS_GENDER } from './module/ui_elements.js'
import { showGender } from './module/api_gender.js'

export const render = (result, gender) => {
  UI_ELEMENTS.RESULT_CONTAINER.innerHTML = ''

  const resultSpan = createTag('span')
  resultSpan.classList.add(gender)
  UI_ELEMENTS.RESULT_CONTAINER.append(resultSpan)

  if (gender === CLASS_GENDER.UNKOWN) {
    resultSpan.textContent = 'Пол не определен'
  } 

  if (gender !== CLASS_GENDER.UNKOWN) {
    resultSpan.textContent = result
  }
}

UI_ELEMENTS.INPUT_FORM.addEventListener('submit', (event) => {
  event.preventDefault()
  showGender(UI_ELEMENTS.INPUT_TEXT.value)
  UI_ELEMENTS.INPUT_TEXT.value = ''
})
