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
console.log(myArray.length);
var rl = readline.createInterface({
  // input : fs.createReadStream('/path/file.txt'),
  input: fs.createReadStream('G20.csv'),
  output: process.stdout,
  terminal: false
})
rl.on('line', function (line) {
  myArray.push(line);
  // console.log(line)
}).on("close", function () {
  console.log(myArray.length);
  console.log(myArray[0]);
});
 //myArray.push(line);
 // console.log(myArray.length);
