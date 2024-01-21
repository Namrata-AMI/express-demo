const express = require("express");

const app = express();
const port = 8080;

app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
    
});

app.get("/",(req,res)=>{
    res.send("you contacted to apple path");
    console.log("apple")
});

app.get("/:username",(req,res)=>{
    let{username} =req.params;
    console.log(username);
    res.send("hello! i am root.");
});





