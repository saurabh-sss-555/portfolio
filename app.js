const express=require('express');
const server=require('http');
const path=require('path');
const app=express();
let port=555;
app.use('/static',express.static('static'));
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));
app.get('/',(req,res)=>{
    res.status(200).render('home');
})
app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`);
})