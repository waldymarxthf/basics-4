import { render } from '../main.js'
import { CLASS_GENDER } from './ui_elements.js'

const isInputValid = (str) => !str || str.trim() === ''
const isInputNumber = (number) => isNaN(number)
const isLowerCase = (str) => str === str.toLowerCase()
const isUpperCase = (str) => str === str.toUpperCase()

const getFirstUpperCase = (str) => {
  if (isLowerCase(str)) {
    return str[0].toUpperCase() + str.slice(1)
  }
  if (isUpperCase(str)) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
  }
}

const checkInput = (value) => {
  if (isInputValid(value) || !isInputNumber(value)) return
  return getFirstUpperCase(value)
}

export const updateGenderColor = (gender) => {
  if (gender === 'male') {
    return CLASS_GENDER.MALE
  }

  if (gender === 'female') {
    return CLASS_GENDER.FEMALE
  }

  if (gender === null) {
    return CLASS_GENDER.UNKOWN
  }
}

export async function showGender(name) {
  const firstName = checkInput(name)
  if (!firstName) return

  const serverUrl = 'https://api.genderize.io'
  const url = `${serverUrl}?name=${firstName}`
  const response = await fetch(url)

  if (!response.ok) {
    console.log('Ошибка HTTP: ' + response.status)
  }

  const result = await response.json()
  const color = updateGenderColor(result.gender)

  render(`${firstName} is ${result.gender}`, color)
}
