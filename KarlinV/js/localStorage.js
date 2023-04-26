export function setTasksLocalStorage(key, arr) {
  localStorage.setItem(key, JSON.stringify(arr));
}

export function getTasksLocalStorage(key) {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
}
