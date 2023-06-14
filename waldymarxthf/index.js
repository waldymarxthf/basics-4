const TelegramBot = require('node-telegram-bot-api');

const token = '6117387884:AAHQ9VXOvvMw-juinC1O34jS0kBRQ87I5Ig';

const texts = [
  'Влад (weitend)',
  'Текст 2',
  'Текст 3',
];

// Инициализация бота
const bot = new TelegramBot(token, { polling: true });

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Начальный индекс текста
  let currentIndex = 0;

  // Функция для отправки следующего текста
  const sendNextText = () => {
    const currentText = texts[currentIndex];
    const opts = {
      reply_markup: {
        inline_keyboard: [[{ text: 'Показать следующий текст', callback_data: 'next_text' }]],
      },
    };

    bot.sendMessage(chatId, currentText, opts);
  };

  sendNextText();
});

// Обработчик нажатия на кнопку
bot.on('callback_query', (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const messageId = callbackQuery.message.message_id;

  if (callbackQuery.data === 'next_text') {
    // Получение следующего индекса текста
    const currentIndex = texts.findIndex((text) => text === callbackQuery.message.text);
    const nextIndex = (currentIndex + 1) % texts.length;

    const nextText = texts[nextIndex];
    const opts = {
      reply_markup: {
        inline_keyboard: [[{ text: 'Показать следующий текст', callback_data: 'next_text' }]],
      },
    };

    bot.editMessageText(nextText, { chat_id: chatId, message_id: messageId, reply_markup: opts.reply_markup });
  }
});