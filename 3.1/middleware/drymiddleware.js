const express = require("express");

const app = express();

//this one is for health-checkup
app.get("/health-checkup", function(req, res){
    //do health checks here
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    //username checks
    if(username != "harkirat" && password != "pass"){
        res.status(400).json({"msg":"Somethings up with your inputs"})
        return
    }

    //input validation
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({"msg":"Somethings up with your inputs"})
        return
    }

    //do something with kidney here
    res.json({
        msg: "Your kidney is fine!"
    })
});

//introducing another route for kidney replacement
//inputs need to be same(need to do both checks(username checks and input validation))
//ugly solution-Create a new route, repeat code

//kidney replacement
app.get("/replace-kidney", function(req, res){
    //do health checks here
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    //username checks
    if(username != "harkirat" && password != "pass"){
        res.status(400).json({"msg":"Somethings up with your inputs"})
        return
    }

    //input validation
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({"msg":"Somethings up with your inputs"})
        return
    }

    //do something with kidney here
    res.json({
        msg: "Your kidney is fine!"
    })
});


app.listen(3000);





