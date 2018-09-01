var express = require('express'),
    app = express(), 
    bodyParser = require('body-parser')
var todoRoutes = require('./routes/todos')

process.env.PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT, function(){
	console.log("App is running on port: "+ process.env.PORT);
})
