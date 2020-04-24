const express = require('express'); //把express call來使用  
const app = express();   
// const cors = require('cors');
// app.use(cors());
// app.options('/', cors());
app.get("/",(req,res)=>{
    let data={
        a:"fdsfds",
        b:"fdsafds"
    }
    res.json(data);
})
var server = app.listen(3001, function() {  
    console.log('Listening on port 3001');  
});   
   