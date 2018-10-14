var PIN = process.argv[2];
var Gpio = require('onoff').Gpio;
var LED = new Gpio(PIN, 'out');
LED.writeSync(1);
