const buf4 = Buffer.allocUnsafe(10); console.log(buf4);
//<Buffer 68 fb 4d 00 00 00 00 00 08 00>,可以看出是有數據的 
buf4.fill(0); console.log(buf4);
//<Buffer 00 00 00 00 00 00 00 00 00 00>

const buf1 = Buffer.alloc(10, 30); console.log(buf1);
// <Buffer 1e 1e 1e 1e 1e 1e 1e 1e 1e 1e>