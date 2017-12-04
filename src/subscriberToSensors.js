import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');
function subscribeToSensors(cb) {
    socket.on('completedOrders', orders => cb(null, orders));
    socket.emit('subscribeToSensors', 5000);
}

export  {subscribeToSensors};