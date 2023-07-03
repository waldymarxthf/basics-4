import Cookies from "js-cookie";
import { saveCodeToCookie, getCodeFromCookie, updateUserName, getUserData } from "./module_js/cookie";
import { main } from "./module_js/variables";


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

    spanText.textContent = messagee;
    spanTime.textContent = time;

    main.message_my.appendChild(clone);
}
main.form.addEventListener("submit", function (event) {
    event.preventDefault();
    generatorTemplate(main.input_message.value, "19:28");
});


// Функция для отправления кода на почту
async function codeToEmaol(event){
    event.preventDefault();

    const email = document.querySelector(".autorisation").value;
    console.log(email);

    try {
        const response = await fetch('https://edu.strada.one/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Код отправлен на почту')
        }
        else {
            console.log('Запрос откланен');
        }
    } catch (error) {
        console.error('Error: ', error)
    }
}
main.get_code.addEventListener("click", codeToEmaol);


main.form_confirmation.addEventListener('submit', async function (event) {
    event.preventDefault();
    try {
        const code = document.querySelector(".code");
        console.log(code.value);
        await saveCodeToCookie(code.value);
        await updateUserName('name');
        await getUserData()

        main.modal_confirmation.close();
        main.modal_autorisation.close();
    } catch (error) {
        console.error(error);

    }

})