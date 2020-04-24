const express = require('express');
const axios=require("axios");
const router=express.Router();
var urlencode = require('urlencode');

//顯示所有資料      GET     http://localhost:8080/contact
router.get('/',(req,res)=>{
    const uri="http://localhost:8080/contact";
    axios.get(uri)
    .then((response)=>{return response.data;})  .catch((err)=>{console.log(err)})
    .then((data)    =>{ res.json(data)})        .catch((err)=>{console.log(err)});
});
//顯示1~5筆資料     GET     http://localhost:8080/contact?start=1&_end=5
router.get('/page',(req,res)=>{//練習query
    const uri=`http://localhost:8080/contact?start=${req.query.start}&_end=${req.query.end}`;
    axios.get(uri)
    .then((response)=>{return response.data;})  .catch((err)=>{console.log(err)})
    .then((data)    =>{ res.json(data)})        .catch((err)=>{console.log(err)});
});
//顯示某筆資料      GET     http://localhost:8080/contact/[params]
router.get('/:id',(req,res)=>{//練習params   順便注意router順序
    const uri="http://localhost:8080/contact/"+req.params.id;
    axios.get(uri)
    .then((response)=>{return response.data;})  .catch((err)=>{console.log(err)})
    .then((data)    =>{ res.json(data)})        .catch((err)=>{console.log(err)});
});


//搜尋name為?的資料 GET     http://localhost:8080/contact?name=帥哥
router.post('/',(req,res)=>{//練習body
    console.log(req.body);
    let name=urlencode(req.body.username, 'utf8')
    //var resultBuffer = encoding.convert(nameString, 'ASCII', 'UTF-8');
    const uri="http://localhost:8080/contact?name="+name;
    console.log(uri);
    axios.get(uri)
    .then((response)=>{return response.data;})                            .catch((err)=>{console.log(err)})
    .then((data)    =>{ data.length>0?res.json(data):res.json("no find")}).catch((err)=>{console.log(err)});
});


//==========以下可不用==================
//新增一筆資料      POST    http://localhost:8080/contact
router.post('/',(req,res)=>{});
//修改某資料的name  PATCH   http://localhost:8080/contact/[params]
router.patch('/',(req,res)=>{});
//更新某筆資料      PUT     http://localhost:8080/contact/[params]
router.put('/',(req,res)=>{});
//刪除某資料        DELETE  http://localhost:8080/contact/[params]
router.delete('/',(req,res)=>{});


module.exports=router;

/*
GET 取得
POST 新增資料
PUT 修改資料(完整、會將原本包含的刪除)
PATCH 修改資料(局部、只更動修改部分)
DELETE 刪除
*/