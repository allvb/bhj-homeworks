const chatWidget = document.querySelector('.chat-widget');
const inputField = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
const chatMessages = [ //список сообщений от чата
    'Привет',
    'Я ещё сплю',
    'У нас всё хорошо',
    'Какой у вас вопрос',
    'Не беспокойте меня понапрасно',
    'Не понял, повторите вопрос',
    'Ну и денёк сегодня',
];
let timer; //идентификатор таймаута

function addMessageClient() { //запись сообщения клиента
    clearTimeout(timer); //обнуление таймера чата
    let time = new Date();
    messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
            <div class="message__text">
            ${inputField.value}
            </div>
        </div>
    `;
    timer = setTimeout(addMessage, 10000); //запуск таймера чата на 10 секунд
}

function addMessage() { //запись сообщения чата
    clearTimeout(timer); //обнуление таймера чата
    let time = new Date();
    const message = Math.floor(Math.random() * chatMessages.length);
    messages.innerHTML += `
        <div class="message">
            <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
            <div class="message__text">
            ${chatMessages[message]}
            </div>
        </div>
    `;
    timer = setTimeout(addMessage, 10000); //запуск таймера чата на 10 секунд
    messages.scrollTop = messages.scrollHeight;// не получается автоматически прокручивать чать к нузу
}

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active'); 
});

chatWidget.onkeydown = (event) => {
    if (event.key === 'Enter' && inputField.value) {
        addMessageClient();
        inputField.value = '';
        const timer = setTimeout(addMessage, 500);
    }
}

timer = setTimeout(addMessage, 10000); //запускаем таймер чата (на 10 секунд чтобы было заметно)




