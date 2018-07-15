//TODO: make authentication work		--done
//TODO: add routes to delete events     --done
//TODO: modify /events for admin 	    --done
//TODO: make an event page to /:id
//TODO: make app responsive.
//TODO: add routes to modify events
//TODO: add route to add sponsors	    
//TODO: refactor code to ES7
//TODO: introduce React


//ISSUE: page not reloading after event deletion

let express=require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var passport=require("passport");
var LocalStrategy=require("passport-local").Strategy;
var sessions=require("express-session");
var Admin=require("./models/admin.js")


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

//-------PASSPORT CONFIGURATION-------//


app.use(sessions({secret:"a random sentece",
				resave:false,
				saveUninitialized:false}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

//------------------------


function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	 
		res.redirect("/adminlogin");
}

app.get("/events", function(req, res){
	//sample events
	// var events=[{"id":"1234", "name":"painting","image":"/artimage.jpg"},
	// 			{"name":"gaming","image":"/gimage.jpg"},
	// 			{"name":"coding challenge", "image":"/codeimage.png"}]
	Event.find({}, function(err, events){
		if(err){
			res.redirect("/");
		}
		else{
			res.render("events", {events:events, curUser:req.user});
			console.log("evenfdfsdfts");
		}
	})
	
})


app.get("/", function(req, res){
	res.render("index");
});

app.post("/events", function(req, res){
	//creaate new Event and save to database
	console.log(req.body.name, req.body.image);
	let newevent=new Event({
		"name":req.body.name,
		"image":req.body.image
	});
	newevent.save(function(err, event){
		if(err){console.log(err)}
	});

	res.redirect("/events/new")
})

app.get("/adminlogin", function(req, res){
	res.render("login");
})

app.get("/register/:username/:password", function(req, res){
	let newAdmin=new Admin({username:req.params.username});
	Admin.register(newAdmin, req.params.password, function(err, admin){
		if (err){
			console.log(err);
			return res.redirect("/adminlogin");	
		}
		passport.authenticate("local")(req,res, function(){
			res.redirect("/events");
		});
	});
});



app.post("/adminlogin", passport.authenticate("local", 
		{
			successRedirect:"/events/new",
			failureRedirect:"/adminlogin" 
		}),
		function(req,res){
			console.log(req.user, "hey");
})

app.delete("/:id",  function(req, res){
	Event.findByIdAndRemove(req.params.id, function(err){
			console.log(req.params.id);
			res.redirect('back');

		}
)})


app.get("/events/new",isLoggedIn,  function(req, res){
	res.render("newevent");
})

app.listen(3000, console.log("app started"));