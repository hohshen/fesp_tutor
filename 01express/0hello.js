const express = require('express'); //把express call來使用  
const app = express();   
const path = require('path');
app.use(express.static('./public'))//static
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // npm install ejs --save  

app.get('/',(req,res)=>{//render
    res.render('index',{title:"hello world"});
})
app.get('/send', function(req, res) {  
 res.send('<H1>Hello</H1> Express');  
}); 
app.get('/json',(req,res)=>{
    let data={
        abc:"abc"
    }
    res.json(data);
}) 

app.get('/status',(req,res)=>{
    res.status(505).end();
}) 
app.get('/redirect',(req,res)=>{
    res.redirect('http://google.com');
}) 

//app.get 意思是 如果收到 '/'   
var server = app.listen(3000, function() {  
 console.log('Listening on port 3000');  
});   
