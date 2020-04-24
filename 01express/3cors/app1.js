const express = require('express'); //把express call來使用  
const app = express();
const path = require('path');
app.use(express.static('./public'))//static
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // npm install ejs --save  
const axios = require('axios');

app.get('/', (req, res) => {//render
    let url = "http://localhost:3001/";
    axios.get(url)//要加http
        .then(function (response) {
            console.log(response.data);
            res.render('index', { title: "hello world", data: response.data });
        }).catch(function (error) {
        console.log(error.response);
        res.end();
    });
    // res.send("hello");
})

var server = app.listen(3000, function () {
    console.log('Listening on port 3000');
});   
