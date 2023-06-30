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
        addMessage(valueMessageForm(), '12:00', 'sent-message');
        console.log(valueMessageForm());
        clearEnterField();
        changeIconBtnSent();
    }
});

// Данные из формы (Сообщение)
function valueMessageForm() {
    const formData = new FormData(UI.form);
    return formData.get("message");
}

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
        UI.btnSend.style.backgroundImage = ICONS.srcBtnDisabled;
    } else {
        UI.btnSend.style.backgroundImage = ICONS.srcBtnActive;
    }
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
