const logOut = document.querySelector('.chat-header-item.logout')
const settings = document.querySelector('.chat-header-item.settings')


const modalWindow = document.querySelector('.modalWindow');
const closeModal = document.querySelector('.modalWindow-header-close')


const formSend = document.querySelector('.chat-footer-form')
const inputMessage = document.querySelector('.chat-footer-form-message_field')


const messageBlock = document.querySelector(".chat-mainWindow-wrapper")
const myTemplate = document.querySelector('#my_message')
const companionTemplate = document.querySelector('#companion_message')

const modalSettingsForm = document.querySelector('#modal_settings_form')
const modalSettingsInput = document.querySelector('#modal_settings_input')




export {logOut, settings, modalWindow, closeModal, formSend, myTemplate,messageBlock,inputMessage, modalSettingsInput,modalSettingsForm,companionTemplate}