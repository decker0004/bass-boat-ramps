const express = require("express"),
      app = express(),
      mongoose = require("mongoose");


app.set("view engine", "ejs");

///landing route
app.get("/", function(req, res){
   res.render("landing"); 
});

///ramps route
app.get("/bassboatramps", function(req, res){
    res.render("bassboatramps");
});

////server call
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Get your Bass Cat rolling!") 
});