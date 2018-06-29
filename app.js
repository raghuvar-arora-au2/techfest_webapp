let express=require("express");
var app=express();
var bodyParser=require("body-parser");


app.set("view engine", "ejs");

//app.use(express.static(__dirname+"/views"));
app.use(express.static("styles"));
app.use(express.static("scripts"));
app.use(express.static("images"));



app.get("/events", function(req, res){
	//sample events
	var events=[{"name":"painting","image":"/artimage.jpg"},
				{"name":"gaming","image":"/gimage.jpg"},
				{"name":"coding challenge", "image":"/codeimage.png"}]
	res.render("events", {events:events});
})


app.get("/", function(req, res){
	res.render("index");
});

app.post("/events", function(req, res){

})

app.get("/adminlogin", function(req, res){
	res.send("login form");
})

app.get("/events/new", function(req, res){
	res.render("newevent");
})

app.listen(3000, console.log("app started"));