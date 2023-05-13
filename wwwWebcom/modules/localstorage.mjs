import{city} from './constants.mjs'

export function setItem(array) {
  for (let i = 0; i < array.length; i++) {
    localStorage.setItem(array[i],"city")
  }
}

export function getItem(index) {
  return localStorage.key(index)
}

export function removeItem(name) {
  localStorage.removeItem(name)
}

export function setlastItem() {
  localStorage.setItem('lastItem', city.textContent)
}