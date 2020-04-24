const fs = require("fs");
//var readStream = fs.createReadStream(__dirname + "/readme.txt"); 讀取器
var readStream=fs.createReadStream(__dirname+'/read.txt','utf8');
var writeStream=fs.createWriteStream(__dirname+'/writeme.txt');

readStream.pipe(writeStream);

// readStream.on("data", chunk => {
//   console.log("received!");
//   writeStream.write(chunk);
// });
