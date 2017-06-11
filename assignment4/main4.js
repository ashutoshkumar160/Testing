//To use file i/o module we do require('fs').
var fs = require("fs");

const readline = require('readline');
// const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
// });
// rl.on('line', function(line) {
//   // process line here
// });
var myArray = [];
var arr = [];
var rl = readline.createInterface({
  input: fs.createReadStream('G20.csv'),
  output: process.stdout,
  terminal: false
})
rl.on('line', function (line) {
  myArray.push(line.split(','));
}).on("close", function () {
  console.log(myArray.length);
  myArray.forEach(function (element) {
    element.forEach(function (obj) {
      obj = obj.substring(1, obj.length - 1);
      // console.log(obj);
    }, this);
    //to convert array data to json data.
    var myJsonString = JSON.stringify(myArray);
    console.log(myJsonString);
  }, this);
})