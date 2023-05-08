let promise = fetch('');
fetch('data(1).json')
  .then(response => response.json())
  .then(user => alert(user.name));