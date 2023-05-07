const addForm = document.querySelector('.form');
const inputValue = document.querySelector('.input-gender')
const list = document.querySelector('.list')


function isNameValid(name) {
   if (!name) {
      console.log('empty.')
      return false;
   }
   return true;
}

async function f(url) {
   try {
      let response = await fetch(url);
      let json = await response.json();

    //   alert(`${json.name} is ${json.gender}`)
    const li = document.createElement('li');
    li.classList.add('added')
    list.append(li);
    li.textContent = `${json.name} is ${json.gender}`;
    list.addEventListener('click',(e)=>{
        if (e.target.classList.contains("added")){
            e.stopPropagation();
            e.target.remove();
           }
    })
   } catch (err) {
      alert(err);
   }
}

addForm.addEventListener('submit', (event) => {
   event.preventDefault();

   const firstName = inputValue.value;
   const serverUrl = 'https://api.genderize.io';
   const url = `${serverUrl}?name=${firstName}`;

   if (!isNameValid(firstName)) {
      return;
   }

   f(url);
})

