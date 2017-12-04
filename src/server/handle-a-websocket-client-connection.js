const io = require('socket.io')();

let sensor = {
    humidity: 0,
    lux: 0,
    temperature: 0
};
let comments = [];

io.on('connection', (client) => {
    client.on('subscribeToSensors', (interval) => {
        console.log('Client subscribing to order data', interval);
        setInterval(() => {
            console.log("humidity works");
            sensor.humidity = sensor.humidity = (Math.round(Math.random()*(80-0+10)+0));
            client.emit('completedOrders', sensor);
        }, interval);
    });

    client.on('subscribeToSensors', (interval) => {
        setInterval(() => {
            console.log("light works");
            sensor.lux = sensor.lux = (Math.round(Math.random()*(1200-400+1)+200));
            client.emit('completedOrders', sensor);
        }, interval);
    });

    client.on('subscribeToSensors', (interval) => {
        setInterval(() => {
            console.log("temp works");
            sensor.temperature = sensor.temperature = (Math.round(Math.random()*(42-0+1)+0));
            client.emit('completedOrders', sensor);
        }, interval);
    });

    client.on('subscribeToComments', (interval) => {
        setInterval(() => {
            client.emit('comments', comments)
        }, interval)
    });

    client.on('sendComment', (value) =>{
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const seconds = date.getSeconds();
        let comment = {
            message: value,
            time: hour + ':' + minute + ':' + seconds
        };
        comments.push(comment);
    });
});
// start listening for clients
const port = 8000;
io.listen(port);
console.log('listening on port ', port);