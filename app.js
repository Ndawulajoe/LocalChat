const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');
const messageList = document.getElementById('messageList');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = messageInput.value;
  if (message) {
    saveMessage(message);
    appendMessage(message);
    messageInput.value = '';
  }
});

function saveMessage(message) {
  const messages = getMessagesFromStorage();
  messages.push(message);
  localStorage.setItem('messages', JSON.stringify(messages));
}

function getMessagesFromStorage() {
  const messages = localStorage.getItem('messages');
  return messages ? JSON.parse(messages) : [];
}

function loadMessages() {
  const messages = getMessagesFromStorage();
  messages.forEach((message) => {
    appendMessage(message);
  });
}

function appendMessage(message) {
  const li = document.createElement('li');
  li.textContent = message;
  messageList.appendChild(li);
}

loadMessages();
