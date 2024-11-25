const express = require("express");

const app = express();

//this one is for health-checkup
app.get("/health-checkup", function(req, res, next){
    console.log("hi from req1")
    next();
},function (req, res, next){
    console.log("hi from req2");
    next();
},function (req, res){
    console.log("hi from req3");
});

app.listen(3000);