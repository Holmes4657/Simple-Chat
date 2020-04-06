class Message {
    time = new Date().getTime();

    constructor(name, text) {
        this.name = name;
        this.text = text;
    }
}

let WS;

//Connect to WS
function connectWS() {
    ws = new WebSocket('ws://WebSocket');

    ws.onmessage = (request) => {
        const message = JSON.parse(request.data);
        addMessage(message);
    }
}

connectWS();

function sendMessage() {
    const name = document.querySelector('#name').value;
    const messageInput = document.querySelector('#message');
    const message = new Message(name, messageInput.value);
    messageInput.value = '';
    ws.send(JSON.stringify(message));
    // addMessage(message);
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

    scrollToBottom();
}

function scrollToBottom() {
    const messagesArea = document.querySelector('.messages');
    messagesArea.scrollTo(0, 100000);
}

document.querySelector('#send')
    .addEventListener('click', sendMessage);
