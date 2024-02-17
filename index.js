const express=require('express');
const app=express();
app.set("view engine","ejs");

app.get('/',(req,res)=>{
    res.render("demo",{name:"nayan",age:20, address:"gurugram, haryana"});
})


app.listen(4000);
