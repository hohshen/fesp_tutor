var express = require('express'); //把express call來使用  
var app = express();   
const contact=require("./router/contact");
const bodyParser = require('body-parser');
var path = require('path');
// parse application/json
app.use(bodyParser.json());//加上這句
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // npm install ejs --save  

app.use("/contact",contact);
app.get("/", (req, res) => {
    console.log("responding");
    res.render('index');
    //res.status(202).send("welcome");
});
app.listen(3000, function() {  
 console.log('Listening on port 3000');  
});   
