const socket = io("http://localhost" + ":3000")
console.log(socket)
const message = document.getElementById("msg");
const messages = document.getElementById("messages");

socket.on('connect', () => {
    console.log('Connected to server');
})

socket.on('error', (err) => {
    console.log(err);
})

const handleSubmitNewMessage = () => {
    socket.emit('chats', { data: message.value });
}

// io.of("/chats").on('connection', (socket) => {
//     socket.on('chats', ({ data }) => {
//         handleNewMessage(data);
//     })
// })

const handleNewMessage = (message) => {
    messages.appendChild(`<li>${message}</li>`);
}