const UI = {
    dialogWindow: document.querySelector(".chat-dialog"),
    enterField: document.querySelector(".chat-form__inp"),
    btnSend: document.querySelector(".btn-send"),
    form: document.querySelector(".chat-form"),
};

const ICONS = {
    srcBtnDisabled: 'url("./src/icons/iconSendDisabled.svg")',
    srcBtnActive: 'url("./src/icons/iconSend.svg")',
};

const tempContainer = document.querySelector("#template");
const textarea = document.querySelector(".chat-form__textarea");

const TEMPLATE = {
    messageTimeTemplate: tempContainer.content.querySelector(
        ".chat-dialog__message-time"
    ),
    messageTextTemlate: tempContainer.content.querySelector(
        ".chat-dialog__message-text"
    ),
};

UI.enterField.addEventListener("input", () => {
    changeIconBtnSent();
    textarea.value = getValueEnterField();
});

UI.form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (isEmptyEnterField()) {
        return;
    } else {
        addMessage(getValueMessageForm(), '12:00', 'sent-message');
        console.log(getValueMessageForm());
        clearEnterField();
        changeIconBtnSent();
    }
});

// Данные(текст сообщения) из формы
function getValueMessageForm() {
    const formData = new FormData(UI.form);
    return formData.get("message");
}

// Очистка поля ввода
function clearEnterField() {
    UI.enterField.textContent = "";
}

// Текст поля ввода
function getValueEnterField() {
    const valueEnterField = UI.enterField.textContent.trim();

    return valueEnterField;
}

// Проверка поля ввода на пустоту
function isEmptyEnterField() {
    const valueEnterField = getValueEnterField();

    if (valueEnterField === "") {
        return true;
    } else {
        return false;
    }
}

// Смена иконки кнопки отправки
function changeIconBtnSent() {
    if (isEmptyEnterField()) {
        disableBtn(UI.btnSend, true);

        UI.btnSend.style.backgroundImage = ICONS.srcBtnDisabled;
    } else {
        disableBtn(UI.btnSend, false);
        
        UI.btnSend.style.backgroundImage = ICONS.srcBtnActive;
    }
}

// Диактивация кнопки
function disableBtn(btn, btnStatus) {
    btn.disabled = btnStatus;
}

// Добавление сообщения
function addMessage(textMessage, time, classMessage) {
    TEMPLATE.messageTextTemlate.textContent = textMessage;
    TEMPLATE.messageTimeTemplate.textContent = time;

    let message = tempContainer.content.cloneNode(true);

    const massageContainerTemp = message.querySelector(".chat-dialog__message");
    massageContainerTemp.classList.add(classMessage);

    UI.dialogWindow.append(message);
}

// Разделить по модулям
// Локалсторедж 
// Добавление сообщений из локалсторедж
// функцию рендер
// отправка по нажатию enter
// обработка ctrl + enter и shift + enter для переноса строки.
// Чтобы курсос был при наведении на поля ввода черточкой
// Функцию для получения времени
// Объект с переменными для классов входящее/исходящее сообщение
// Объект с данными для модалок