import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');
function subscribeToSensors(cb) {
    socket.on('completedOrders', orders => cb(null, orders));
    socket.emit('subscribeToSensors', 20000);
}

export  {subscribeToSensors};
