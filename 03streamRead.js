const fs = require("fs");
///var readStream = fs.createReadStream(__dirname + "/read.txt"); //讀取器
var readStream=fs.createReadStream(__dirname+'/read.txt','utf8');



readStream.on("data", chunk => {
  console.log("received!");
  console.log(chunk);
});
