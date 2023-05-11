export function setItem(item) {
  localStorage.setItem(item, '')
}

export function getItem(index) {
      return  localStorage.key(index)
  }