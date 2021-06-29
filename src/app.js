const express = require('express');
const app = express()
const path = require('path');
const hbs =require('hbs');
const port  = process.env.PORT || 3000;
// public static path
const static_path = path.join(__dirname,"../public"); 
const templates_path = path.join(__dirname,"../templets/views"); 
const partial_path = path.join(__dirname,"../templets/partials");
app.set('view engine','hbs');
app.set('views', templates_path)
hbs.registerPartials(partial_path)
app.use(express.static(static_path))


//routing
app.get("", (req,res) => {
    res.render('index')
})
app.get("/about",(req,res) => {
    res.render('about')
})
app.get("/weather",(req,res) => {
    res.render('weather')
})
app.get("*",(req,res) => {
    res.render('404error', {
        errorMsg: "Opps! Page Not Found"
    })
})
app.listen(port,()=>{
    console.log(`It's Working ${port}`)
});