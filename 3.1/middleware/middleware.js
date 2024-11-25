const app = express();

//defining middleware(just another fn)
function userMiddleware(req, res, next){
    if(username != "harkirat" && password != "pass"){
        res.status(400).json({
            msg:"Somethings up with your inputs"
        });
    } else{
        next();
    }
};

function kidneyMiddleware(req, res, next){
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            msg:"Somethings up with your inputs"
    });
    } else{
        next();
    }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware ,function(req, res){ //using middleware
    //do something with kidney here
    res.send("Your are healthy");
});

app.get("/replace-kidney", userMiddleware, kidneyMiddleware , function(req, res){
    //do something with kidney here
    res.send("Your kidney is healthy");
});

app.get("/heart-check", userMiddleware, kidneyMiddleware , function(req, res){
    res.send("Your heart is healthy");
});