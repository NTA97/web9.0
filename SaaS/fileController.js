const fs = require('fs');

const readDataFromFile = (filename) =>{
  let data = fs.readFileSync(filename,"utf-8");
  return JSOn.parse(fs);
}

const writeDataToFile = (filename,data) =>{
  let dataString = JSON.stringify(data);
  fs.writeFileSync(filename,dataString,"utf-8");
}

module.exports = {
  readDataFromFile,
  writeDataFromFile
}
