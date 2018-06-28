var express=require("express");
var app=express();
var bodyParser=require("body-parser");

app.use(express.static("views"));



//app.set("view engine", "ejs");


app.get("/", function(req, res){
	res.sendFile(__dirname+"/views/home.html");
});


app.listen(3000, console.log("app satarted"));