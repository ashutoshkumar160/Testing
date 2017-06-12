var fs = require("fs");

const readline = require('readline');

var headers = [];
var lines = 0;

const rl = readline.createInterface({
  input: fs.createReadStream('G20.csv'),
  output: fs.createWriteStream('output.json')
})

rl.on('line', (l) => {
  //var line = l.replace((/'/g, '')).split(',');
  var line = l.replace(/"/g, '').split(',');

  // console.log(line);
  var template = `{"${headers[0]}":"${line[0]}",
                    "${headers[1]}":"${line[1]}",
                    "${headers[2]}":"${line[2]}",
                    "${headers[3]}":"${line[3]}"
                    "${headers[4]}":"${line[4]}"
                    "${headers[5]}":"${line[5]}"
                    "${headers[6]}":"${line[6]}"
                    "${headers[7]}":"${line[7]}"
                    "${headers[8]}":"${line[8]}"
                    "${headers[9]}":"${line[9]}"
                    "${headers[10]}":"${line[10]}"
                    "${headers[11]}":"${line[11]}"
                    "${headers[12]}":"${line[12]}"
                    "${headers[13]}":"${line[13]}"
                    "${headers[14]}":"${line[14]}"
                    "${headers[15]}":"${line[15]}"
                    "${headers[16]}":"${line[16]}"
                    "${headers[17]}":"${line[17]}"
                    "${headers[18]}":"${line[18]}"
                    "${headers[19]}":"${line[19]}"
                    "${headers[20]}":"${line[20]}"
                    "${headers[21]}":"${line[21]}" 
                    "${headers[22]}":"${line[22]}"               
              }`
  var json = ''

  if (lines === 0) {
    headers = line
  } else if (lines === 1) {
    json += '[\n  '
    json += template
  } else {
    json += ',\n  '
    json += template
  }

  rl.output.write(json)

  lines++
})

rl.on('close', (l) => {
  rl.output.write('\n]')
})