import { Cookies } from 'js-cookie';

Cookies.set('name', 'Ivan');

const UI = {
    dialogWindow: document.querySelector('.chat-dialog'),
    enterFieldChat: document.querySelector('.chat-form__inp'),
    btnSend: document.querySelector('.btn-send'),
    form: document.querySelector('.chat-form'),
    btnSettings: document.querySelector('.btn-settings'),
    preload: document.querySelector('.preload-wrapper'),
};

const UI_MODAL = {
    modal: document.querySelector('#modal-js'),
    btnModalClose: document.querySelector('.modal__btn-close'),
    btnGiveCode: document.querySelector('.btn-give-code'),
    btnEnterCode: document.querySelector('.btn-enter-code'),
    btnSingIn: document.querySelector('.btn-sing-in'),
    enterFieldModal: document.querySelector('.modal-input'),
    titleModal: document.querySelector('.modal__title-text'),
    titleInputModal: document.querySelector('.modal-form__title'),
};

const ICONS = {
    srcBtnDisabled: 'url("./src/icons/iconSendDisabled.svg")',
    srcBtnActive: 'url("./src/icons/iconSend.svg")',
};

const tempContainer = document.querySelector('#template');
const textarea = document.querySelector('.chat-form__textarea');

const TEMPLATE = {
    messageTimeTemplate: tempContainer.content.querySelector(
        '.chat-dialog__message-time'
    ),
    messageTextTemlate: tempContainer.content.querySelector(
        '.chat-dialog__message-text'
    ),
};

// const MODAL_TITLE = {
//     authorization: 'Авторизация',
//     confirmation: 'Подтверждение',
//     settings: 'Настройки',
// };

const MODAL_TITLE = {
    authorization: {
        title: 'Авторизация',
        inputTitle: 'Почта:',
        placeholder: 'Введите почту...',
    },
    confirmation: {
        title: 'Подтверждение',
        inputTitle: 'Код:',
        placeholder: 'Введите код...',
    },
    settings: {
        title: 'Настройки',
        inputTitle: 'Имя в чате:',
        placeholder: 'Введите имя...',
    },
};

UI.enterFieldChat.addEventListener('input', () => {
    changeIconBtn(UI.enterFieldChat);
    textarea.value = getValueEnterChatField(UI.enterFieldChat);
});

UI.form.addEventListener('submit', sendingMessage);

document.addEventListener('keydown', (event) => {
    if (event.code === 'Enter' && !event.ctrlKey && !event.shiftKey) {
        sendingMessage(event);
    }
});

// ======================ПОЛУЧЕНИЕ ТОКЕНА========================
// ==============================================================

const URL = {
    urlToken: 'https://edu.strada.one/api/user',
    urlDataProfile: 'https://edu.strada.one/api/user/me',
};

const METHOD = {
    get: 'GET',
    post: 'POST',
    patch: 'PATCH',
};

let token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmFob3Zza2lpODFAZ21haWwuY29tIiwiaWF0IjoxNjg4MjMyMjAxLCJleHAiOjE2OTE4Mjg2MDF9.AtkLbBsUx1fAvpaP_Q53Gz5YJITqkm6UCdVwoSEAxtw';

const HEADERS = {
    'Content-type': 'application/json; charset=UTF-8',
    Authorization: `Bearer ${token}`,
};

// Обработка поля ввода в модалке
UI_MODAL.enterFieldModal.addEventListener('input', actionInputAuthorization);

// Обработка клика ПОЛУЧИТЬ КОД
UI_MODAL.btnGiveCode.addEventListener('click', () => {
    if (isEmptyInputValue(UI_MODAL.enterFieldModal)) {
        return;
    }
    getToken(
        URL.urlToken,
        METHOD.post,
        HEADERS,
        getValueInput(UI_MODAL.enterFieldModal)
    )
        .then((answer) => {
            if (answer.status === 'true') {
                clearInputField(UI_MODAL.enterFieldModal);
                activeDisableBtn(UI_MODAL.btnGiveCode, 'disabled');
                activeDisableBtn(UI_MODAL.btnEnterCode, 'active');
            } else if (answer.status === 'false') {
                activeDisableBtn(UI_MODAL.btnGiveCode, 'disabled');
            }
        })
        .catch((error) => {
            console.log(`Error: ${error.message}`);
        });
});

// Обработка кнопки ввести код
UI_MODAL.btnEnterCode.addEventListener('click', actionBtnEnterCode);

// запрос для получение токена
async function getToken(url, method, headers, email) {
    try {
        showHidePreload('flex');

        const response = await fetch(url, {
            method: method,
            headers: headers,
            body: JSON.stringify({ email }),
        });

        const answer = await response.json();

        if (response.status === 200) {
            console.log(answer);

            return { status: 'true' };
        } else {
            console.log('ошибка', answer);
            console.log(response.status);

            return { status: 'false' };
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    } finally {
        showHidePreload('none');
    }
}

// getToken();
// =============================================================
// =============================================================


// Действия при вводе в input авторизации
function actionInputAuthorization() {
    const valueField = getValueInput(UI_MODAL.enterFieldModal);

    if (validateEmail(valueField)) {
        activeDisableBtn(UI_MODAL.btnGiveCode, 'active');
    } else {
        activeDisableBtn(UI_MODAL.btnGiveCode, 'disabled');
    }
}

// Действия при вводе в input подтверждения
function actionInputConfirmation() {
    if(isEmptyInputValue(UI_MODAL.enterFieldModal)) {
        activeDisableBtn(UI_MODAL.btnSingIn, 'disabled');
        return;
    } else {
        activeDisableBtn(UI_MODAL.btnSingIn, 'active');
    }
}

// Действие по кнопке ввести код
function actionBtnEnterCode() {
    if (isEmptyInputValue(UI_MODAL.enterFieldModal)) return;

    clearInputField(UI_MODAL.enterFieldModal);
    UI_MODAL.enterFieldModal.removeEventListener('input', actionInputAuthorization);
    UI_MODAL.enterFieldModal.addEventListener('input', actionInputConfirmation);

    renderModal(
        MODAL_TITLE.confirmation.title,
        MODAL_TITLE.confirmation.inputTitle,
        MODAL_TITLE.confirmation.placeholder
    );

    showHideBtn(UI_MODAL.btnGiveCode, 'hide');
    showHideBtn(UI_MODAL.btnEnterCode, 'hide');
    showHideBtn(UI_MODAL.btnSingIn, 'show');
}

// ПОКАЗАТЬ/СКРЫТЬ КНОПКУ
function showHideBtn(btn, action) {
    if (action === 'hide') btn.classList.add('hide-btn');
    if (action === 'show') btn.classList.remove('hide-btn');
}

// Рендер модального окна
function renderModal(titleModal, titleInput, placeholder) {
    UI_MODAL.titleModal.textContent = titleModal;
    UI_MODAL.enterFieldModal.placeholder = placeholder;
    UI_MODAL.titleInputModal.textContent = titleInput;
}

// Отправка сообщения
function sendingMessage(event) {
    event.preventDefault();
    if (isEmptyEnterField(UI.enterFieldChat)) {
        return;
    } else {
        addMessage(getValueMessageForm(), '12:00', 'sent-message');
        clearEnterChatField();
        changeIconBtn(UI.enterFieldChat);
    }
}

// Показать/Скрыть preload
function showHidePreload(display) {
    UI.preload.style.display = display;
}

// Активировать или диактивировать кнопку
function activeDisableBtn(btn, action) {
    if (action === 'active') {
        btn.classList.add('active-btn');
        btn.disabled = '';
    } else if (action === 'disabled') {
        btn.classList.remove('active-btn');
        btn.disabled = 'false';
    }
}

// Проверка поля на ссылки
function containsLinks(text) {
    const pattern = /(http:|https:)([^\s]+)/gi;
    return pattern.test(text);
}

// Проверка корректности email
function validateEmail(email) {
    const pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

// Данные(текст сообщения) из формы
function getValueMessageForm() {
    const formData = new FormData(UI.form);
    return formData.get('message');
}

// Очистка поля ввода в чате
function clearEnterChatField() {
    UI.enterFieldChat.textContent = '';
}

// Очистка поля ввода input
function clearInputField(input) {
    input.value = '';
}

// Текст поля ввода
function getValueEnterChatField(field) {
    const valueEnterField = field.textContent.trim();

    return valueEnterField;
}

// Проверка поля ввода в чате на пустоту
function isEmptyEnterField(field) {
    const valueEnterField = getValueEnterChatField(field);

    if (valueEnterField === '') return true;
    if (valueEnterField) return false;
}

// Получение значения из input
function getValueInput(input) {
    const valueFiled = input.value.trim();

    return valueFiled;
}

// Проверка поля ввода input на пустоту
function isEmptyInputValue(field) {
    const valueField = getValueInput(field);

    if (valueField === '') return true;
    if (valueField) return false;
}

// Смена иконки кнопки отправки
function changeIconBtn(field) {
    if (isEmptyEnterField(field)) {
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

    const massageContainerTemp = message.querySelector('.chat-dialog__message');
    massageContainerTemp.classList.add(classMessage);

    UI.dialogWindow.append(message);
}

// ===================Модальное окно=====================
// ======================================================

UI.btnSettings.addEventListener('click', showModal);

UI_MODAL.modal.addEventListener('click', (event) => {
    if (
        event.target === UI_MODAL.btnModalClose ||
        event.target === UI_MODAL.modal
    ) {
        hideModal();
    }
});

function showModal() {
    UI_MODAL.modal.classList.add('show-modal');
}

function hideModal() {
    UI_MODAL.modal.classList.remove('show-modal');
}

// ======================================================
// ======================================================

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
