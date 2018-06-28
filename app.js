var express=require("express");
var app=express();
var bodyParser=require("body-parser");

app.use(express.static(__dirname+"/views"));
app.use(express.static("styles"));
app.use(express.static("scripts"));
app.use(express.static("images"));



//app.set("view engine", "ejs");


app.use("/", function(req, res){
	res.sendFile(__dirname+"/views/index.html");
});


app.listen(3000, console.log("app started"));