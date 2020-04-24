const http=require('http')
const fs=require('fs')

http.createServer((req,res)=>{
    console.log('request was made:'+req.url);
    res.writeHead(200,{'Content-type':"video/mp4"});
    var readStream=fs.createReadStream(__dirname+'/1.mp4')
    readStream.pipe(res);
}).listen(3000,()=>{console.log("listen 3000")});
