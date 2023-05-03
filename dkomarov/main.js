const addItemsForm = document.querySelector('.add-items-form');
const itemsList = document.querySelector('.items-list');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addElem(text) {
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}


function addItem(e) {
    e.preventDefault();
    const text = e.target.item.value;
    const item = {
        text: text,
        checked: false
    };

    addElem(item);
    displayItems(items, itemsList);
    this.reset();
    
};


function displayItems(tasks, list) {
    list.innerHTML = tasks.map((task, index) => {
        return `<li>
        <input type='checkbox' id='item${index}' data-index='${index}' ${task.checked ? 'checked' : ''}/>
        <label for='item${index}'>${task.text}</label>
        </li>`;
    }).join('');
    
};

function toggleClick(e) {
    if (!e.target.matches('input')) return;
    const element = e.target.dataset.index;
    items[element].checked = !items[element].checked;
    localStorage.setItem('items', JSON.stringify(items));
    displayItems(items, itemsList);
}

addItemsForm.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleClick);

displayItems(items, itemsList)