import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');
function subscribeToComments(cb) {
    socket.on('comments', comments => cb(null, comments));
    socket.emit('subscribeToComments', 1000);
}


function sendComment(input) {
    socket.emit('sendComment', input)
}
export  {subscribeToComments, sendComment};