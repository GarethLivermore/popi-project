'use strict';

const io = require('socket.io')();

const serialport = require('serialport');
const readline = require('readline');
const sp_readline = serialport.parsers.Readline;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'select port> '
});

var idx = 0;
var ports = [];
var temp;
var hum;

console.log('COM port list:');
serialport.list(function (err, p) {
  p.forEach(function(p) {
    ports.push(p.comName);
    console.log(' [' + idx + '] ' + p.comName);
    idx++;
  });

  rl.prompt();

  rl.on('line', function(line) {
    //console.log(line);
    //console.log(ports);
    if(line<idx) {
      console.log('Opening ' + ports[Number(line)]);

      const port = new serialport(ports[Number(line)], {
        baudRate: 9600
        });
      const parser = new sp_readline();
      port.pipe(parser);

      parser.on('data', function(data){
        var results = data.split(',');
        temp = results[0];
        hum = results[1];
        console.log(data);
      });

      port.on('error', function(e) {
        console.error(e.message);
        process.exit(0);
      });

      port.on('open', function() {
        console.log('Serial Port Opened');
      });

      port.on('close', function(err) {
        console.log('Serial Port Closed: ' + err);
        process.exit(0);
      });

    } else {
      console.error('ERROR: Wrong port number');
      process.exit(0);
    }
  });

  rl.on('close', function() {
  console.log('Bye!');
  process.exit(0);
});

});

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
            sensor.humidity = sensor.humidity = hum;
            client.emit('completedOrders', sensor);
        }, interval);
    });

    client.on('subscribeToSensors', (interval) => {
        setInterval(() => {
            console.log("light works");
            sensor.lux = sensor.lux = (Math.round(Math.random()*(100+1)+1));
            client.emit('completedOrders', sensor);
        }, interval);
    });

    client.on('subscribeToSensors', (interval) => {
        setInterval(() => {
            console.log("temp works");
            sensor.temperature = sensor.temperature = temp;
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
