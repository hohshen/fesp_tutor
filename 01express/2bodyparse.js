var express = require('express'); //把express call來使用  
var app = express();   

const bodyParser = require('body-parser');
// parse application/json
app.use(bodyParser.json());//加上這句
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',(req,res)=>{//render
    res.send('index');
})
//http://localhost:3000/params/a
app.get('/params/:p',(req,res)=>{//render
    console.log(req.params);
    res.send(req.params);
})
// post http://localhost:3000/ 
app.post('/', function(req, res) {  
    console.log(req.body);
    res.send(req.body);
}); 
//http://localhost:3000/get?a=1&b=3
app.get('/get',(req,res)=>{
    console.log(req.query);
    res.send(req.query);
}) 

var server = app.listen(3000, function() {  
 console.log('Listening on port 3000');  
});   
