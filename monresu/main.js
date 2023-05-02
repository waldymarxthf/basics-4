const form = document.querySelector('form')
const input = document.querySelector('input')

form.addEventListener('submit', () => foo(e, user.name))

function foo(e, name) {
  e.preventDefault();
  console.log(text)
  const text = input.value;
  document.body.insertAdjacentHTML('beforeend', text);
}