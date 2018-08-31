var express = require('express'),
    app = express(), 
    bodyParser = require('body-parser')
var todoRoutes = require('./routes/todos')

process.env.PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
	res.json({message: "HI FROM THE ROOT ROUTE"})
});

app.use('/api/todos', todoRoutes);

app.get('/happy', function(req, res){
	res.send(":-)")
})

app.listen(process.env.PORT, function(){
	console.log("App is running on port: "+ process.env.PORT);
})
