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
var arr=[];
// console.log(myArray.length);
var rl = readline.createInterface({
  // input : fs.createReadStream('/path/file.txt'),
  input: fs.createReadStream('G20.csv'),
  output: process.stdout,
  terminal: false
})
rl.on('line', function (line) {
 //arr.push(line.split(','));
  myArray.push(line.split(','));
  //var data = line(',');
  //console.log(data);
  //console.log(typeof (line));
}).on("close", function () {
  console.log(myArray.length);
console.log(myArray[0]);
  myArray.forEach(function (element) {
    element.forEach(function(obj) {
      obj=obj.substring(1,obj.length-1);
      console.log(obj);
    }, this);
  
  }, this);
})
//   var myJsonString = JSON.stringify(myArray[0]);
//   console.log(myJsonString);
//  myArray.push(line);
//  console.log(myArray.length);