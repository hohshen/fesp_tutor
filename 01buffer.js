
// (預設為16進位編碼)資料為 nodejs
var buffer16 = new Buffer([0x6e, 0x6f, 0x64, 0x65, 0x6a, 0x73]); 
// 改用utf8來指定資料
var bufferUTF8 = new Buffer('nodejs你好', 'utf8');

console.log("輸出length：" + buffer16.length + ".");
console.log("輸出length：" + bufferUTF8.length + "."); //中文一個字佔了3個字元()
console.log("輸出Ans：" + bufferUTF8 );


console.log("hex2utf=>"+buffer16.toString('utf8')); // nodejs
console.log("hex2hex=>"+buffer16.toString('hex')); // 6e6f64656a73
console.log("utf2utf=>"+bufferUTF8.toString('utf8')); // nodejs
console.log("utf2hex=>"+bufferUTF8.toString('hex'));//6e6f64656a73e4bda0e5a5bd