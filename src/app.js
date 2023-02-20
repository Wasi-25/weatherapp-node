const express = require("express");
const app =express();
const hbs=require("hbs");
const path = require("path");
const port = process.env.PORT;
const cors = require("cors");

// public static path
const staticPath= path.join(__dirname,"../public");
const templatePath= path.join(__dirname,"../templates/views");
const partialsPath= path.join(__dirname,"../templates/partials");

app.use(cors());
app.set("view engine", "hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

//routing
app.get("",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg: "Oops! Page Doesn't Exists, Please Go Back"
    });
});
app.listen(port,()=>{
    console.log(`Listening...`);
});
