import Cookies from "js-cookie";
import { presentTime, currentTime } from "./module_js/data";
import { main } from "./module_js/variables";
import { checkToken, changeName, getMessage } from "./module_js/request";
import { codeToEmail } from "./module_js/request";
import { storage } from "./module_js/storage";
import { da } from "date-fns/locale";



main.seting_button.addEventListener('click', function () {
    main.modal_settings.showModal();
});
main.close_settings.addEventListener('click', function () {
    main.modal_settings.close();
});
main.close_autorisation.addEventListener('click', function () {
    main.modal_autorisation.close();
});

main.enter_code.addEventListener("click", function (event) {
    event.preventDefault();
    main.modal_autorisation.close();
    main.modal_confirmation.showModal();

});
function generatorTemplate(messagee, name, time, flag) {
    let clone = main.template.content.cloneNode(true);
    let li = clone.querySelectorAll("li");
    const spanText = li[0].querySelector(".message_text");
    const spanTime = li[0].querySelector(".message_time");

    spanText.textContent = name + ': ' + messagee;
    spanTime.textContent = time;

    if(flag == "message_my"){
        main.message_my.appendChild(clone);
    }
    else{
        main.message_you.appendChild(clone);
    }

    
}
main.form.addEventListener("submit", function (event) {
    event.preventDefault();
    generatorTemplate(main.input_message.value,main.modal_input_settings.value, presentTime(), "message_my");
});

main.modal_content_main.addEventListener('submit', function (event) {
    event.preventDefault();
    changeName(main.modal_input_settings.value, Cookies.get("code"));
    main.modal_autorisation.close();

})


main.get_code.addEventListener("click", codeToEmail);


main.form_confirmation.addEventListener('submit', async function (event) {
    event.preventDefault();
    try {
        const code = document.querySelector(".code");
        console.log(code.value)
        const token = checkToken(code.value);
        console.log(token);
        Cookies.set('token', code.value);
        if (token) {
            
            main.modal_confirmation.close();
            main.modal_autorisation.close();
        }
    } catch (error) {
        console.log('ОШИБКА');

    }

})

document.addEventListener("DOMContentLoaded", async function(){
    let data = await getMessage();
    console.log(data);
    for(let i in data.messages){
        generatorTemplate( data.messages[i].text, data.messages[i].user.name, currentTime(data.messages[i].createdAt));
    }
    


    console.log("data.text = ", data.messages[0].text);
    console.log("data.name = ", data.messages[0].user.name);
    
})