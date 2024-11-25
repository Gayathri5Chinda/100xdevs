const express = require("express");

const app = express();

app.use(express.json()); //middleware (if you dont use this middleware body won't get extracted)

app.post("/health-checkup", function(req, res){
    //kidney = [1, 2]
    const kidneys = req.body.kidneys;
    const heart = req.body.heart;

    //input validation
    if(!kidneys){
        res.json({
            msg:"wrong inputs"
        })
    }else{
        const kidneyLength = kidneys.length;

        res.send("you have " + kidneyLength + " kidneys");
    }
});

//global catches
app.use(function(err, req, res, next){
    res.json({
        msg: "Sorry something is up with server"
    })
})

app.listen(3000);