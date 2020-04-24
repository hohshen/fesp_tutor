const http=require('http')
const fs=require('fs')

http.createServer((req,res)=>{
    console.log('request was made:'+req.url);
    res.writeHead(200,{'Content-type':"text/plain"});
    var readStream=fs.createReadStream(__dirname+'/read.txt')
    readStream.pipe(res);
}).listen(3000,()=>{console.log("listen 3000")});
