import Cookies from "js-cookie";
import { presentTime } from "./module_js/data";
import { main } from "./module_js/variables";
import { checkToken, changeName } from "./module_js/request";
import { codeToEmail } from "./module_js/request";



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

})
function generatorTemplate(messagee, time) {
    let clone = main.template.content.cloneNode(true);
    let li = clone.querySelectorAll("li");
    const spanText = li[0].querySelector(".message_text");
    const spanTime = li[0].querySelector(".message_time");

    spanText.textContent = main.modal_input_settings.value + ': ' +  messagee;
    console.log(main.modal_input_settings.value)
    console.log(spanText.textContent)
    spanTime.textContent = time;

    main.message_my.appendChild(clone);
}
main.form.addEventListener("submit", function (event) {
    event.preventDefault();
    generatorTemplate(main.input_message.value, presentTime());
});

main.modal_content_main.addEventListener('submit', function(event){
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
        const token =  checkToken(code.value);
        console.log(token);
        if(token) {
            Cookies.set('code', code.value);
            main.modal_confirmation.close();
            main.modal_autorisation.close();
        }
    } catch (error) {
        console.log('ОШИБКА');

    }

})