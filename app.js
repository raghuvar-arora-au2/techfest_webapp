let express=require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");


mongoose.connect("mongodb://raghuvar:qwert123@ds243418.mlab.com:43418/sample");


app.set("view engine", "ejs");

//app.use(express.static(__dirname+"/views"));
app.use(express.static("styles"));
app.use(express.static("scripts"));
app.use(express.static("images"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const eventSchema= new mongoose.Schema({
	"name": String,
	"image": String,
	"info": String
})

const Event=mongoose.model("Event", eventSchema);


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
	console.log(req.body.name, req.body.image);
	res.redirect("/events/new")
})

app.get("/adminlogin", function(req, res){
	res.send("login form");
})

app.get("/events/new", function(req, res){
	res.render("newevent");
})

app.listen(3000, console.log("app started"));