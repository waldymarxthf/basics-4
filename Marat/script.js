const modal = document.querySelector(".modal");
const seting_button = document.querySelector(".seting_button");
const close = document.querySelector(".close");
const template = document.querySelector(".template");
const message_my = document.querySelector('.message_my');
const message_you = document.querySelector('.message_you');
const message = document.querySelector(".message");

seting_button.addEventListener('click', function () {
    modal.showModal();
});
close.addEventListener('click', function () {
    modal.close();
});
function generatorTemplate(messagee, time) {
    let clone = template.content.cloneNode(true);
    let li = clone.querySelectorAll("li");
    const spanText = li[0].querySelector(".message_text");
    const spanTime = li[0].querySelector(".message_time");

    spanText.textContent = messagee;
    spanTime.textContent = time;

    message_my.appendChild(clone);
}

generatorTemplate("hello", "12:45");
generatorTemplate("hello", "12:47");

// const open_module = document.querySelector(".open_module");
// const module = document.querySelector('.module');
// const closeModule = document.querySelector('.closeModule');
// const module_inner = document.querySelector('module_inner');

// open_module.addEventListener('click', function() {
//     module.showModal();
// })

// closeModule.addEventListener('click', function(){
//     module.close()
// });

// module.addEventListener('click', function(event){
//     console.log(event.target);
//     if(event.target === module_inner) return;
//     if(event.target === module) module.close()
// })