//To use file i/o module we do require('fs').
var fs = require("fs");

// Asynchronous read-> no blocking at all,(better then synchronous read)
fs.readFile('G20.csv', function (err, data) {
    if (err) {
        return console.error(err);
    }
   // console.log(data);// not working.
  // console.log(data.toString());// working.
  console.log("contents " + data);// working.
    //console.log("Asynchronous read: " + data.toString());// working.
});
