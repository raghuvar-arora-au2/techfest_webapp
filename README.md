**TODO**: ~~make authentication work~~		
**TODO**: ~~add routes to delete events~~    
**TODO**: ~~modify /events for admin~~ 	    
**TODO**: make an event page to /:id
**TODO**: make app responsive.
**TODO**: add routes to modify events
**TODO**: add route to add sponsors	    
**TODO**: refactor code to ES7
**TODO**: introduce React


**ISSUE**: page not reloading after event deletion



#Instructions to setup
This requires presence of NPM and Node.js on system.

To install these kindly refer to https://docs.npmjs.com/getting-started/installing-node

	1.) Clone this repo on your local system

	2.) Using a terminal switch to the folder where this repo is cloned and install following modules from npm.

		npm install



##Now to run the code

1.) Using the terminal type

        
        node app.js 
        
    
    This will start the server at localhost and port 3000 by default
    Make sure you are in the clonned repo while doing this

2.) Now using a browser open

       http://localhost:3000/


##Admin login route
    http://localhost:3000/adminlogin
    username:raghuvar
    pass:qwert123

##To add New events(can only be done after loggin in)
	http://localhost:3000/events/new

##To delete events
	events can be deleted from events page 

