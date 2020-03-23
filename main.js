class Message {
    time = new Date().getTime();

    constructor(name, text) {
        this.name = name;
        this.text = text;
    }
}

function sendMessage() {
    const name = document.querySelector('#name').value;
    const messageInput = document.querySelector('#message');
    const message = new Message(name, messageInput.value);
    messageInput.value = '';
    addMessage(message);
}

function addMessage(message) {
    const messagesArea = document.querySelector('.messages');

    const messageBlock = document.createElement('div');
    messageBlock.classList.add('message-item');

    const name = document.createElement('span');
    name.classList.add('name');
    name.innerText = message.name;

    const text = document.createElement('span');
    text.classList.add('message');
    text.innerText = message.text;

    const date = document.createElement('span');
    date.classList.add('date');
    date.innerText = message.time;

    messageBlock.appendChild(name);
    messageBlock.appendChild(text);
    messageBlock.appendChild(date);

    messagesArea.appendChild(messageBlock);
}

document.querySelector('#send')
    .addEventListener('click', sendMessage);