const express = require('express');
const bodyParser = require('body-parser');
const app= express();
const port=3000;
app.use(bodyParser.json());

app.get('/login',(req,res)=>{
    res.send('<h1>This is login page</h1>');
});
app.get('/home',(req,res)=>{
    res.send('<h1>This is home page</h1>');
});

app.get(`/calculator/:num1/:num2`,(req,res)=>{
    // var num1=Number(num1);
    // var num2=Number(num2);
    var num1=Number(req.params.num1);
    var num2=Number(req.params.num2);
    console.log(num1);
    var result= num1+num2;
    console.log(result);
    res.send(`${result}`);

})

app.listen(port,()=>{console.log("Listening to port 3000")});
