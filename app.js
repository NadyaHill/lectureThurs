// THIS IS OUR SERVER!!!

// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/publicLecture'));

// right here we're going to make an array of objects
// make some seed sandwiches so that every time nodemon restarts the app there will be data
// yeah, persistant database


var sandwiches = [
	{
		name		: 'Phil Special',
		toppings	: ['Mystery Meat', 'Zesty Mayo', 'Rotton Egg'],
		bread		: 'Rye'
	},
	{
		name		: 'Sean Special',
		toppings	: ['Salt', 'Hops', 'Sprouts'],
		bread		: 'Lettuce Wrap'
	}

]



// Routes \\
// this was changed
app.get('/', function(req, res){
  res.sendFile('home.html', {root : './publicLecture'})
});


// app.get('pokemon', function(req, res){
	// res.sendFile('pokemon.html', {root: __dirname + '/public/html'})
// })

// we don't want to sendFile becuase the sandwiches are not a full file now
// you can also send res.json(sandwiches) as long as you know the data is jason
app.get('/api/sandwiches', function(req, res){
	res.send(sandwiches)
})


// it's fine to have a post request at the same route as the get request because they're handled differently
app.post('/api/sandwiches', function(req, res){
// our data will live in the req.body
// we don't use req.params because we have a clearly defined static route (not ":api" or ":params")
// a parameterized route would be '/api/:sandwiches'
	console.log('Body ->', req.body)
	sandwiches.push({
		name	: req.body.name,
		bread	: req.body.bread,
		toppings :req.body.toppings.split(", ")
	})

	res.send(sandwiches)

})






// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})