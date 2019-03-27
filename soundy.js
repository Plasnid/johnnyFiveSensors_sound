//A0, voltage(5v) and ground for pins

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var sensor = new five.Sensor("A0");
  
  // Scale the sensor's data from 0-1023 to 0-10 and log changes
  sensor.on("change", () => {
    // this.value will reflect a scaling from 0-1023 to 0-180
    console.log(sensor.scaleTo(0, 100000)); // integer
    console.log(sensor.fscaleTo(0, 100000)); // float
  });
});
