var express = require('express');
var cheerio = require('cheerio');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var port = 3000;

var app = express(); 
 app.use(express.static(__dirname + '/client/build/'));
//CRUD --get, put, post, delete

//load single HTML pg
app.get( '/', function(request, response) {
    response.sendFile(__dirname + '/client/build/index.html');
    console.log(__dirname);
})

//.get -->components will query MongoDB for saved articles
//add Promise here? Using mongoose
app.get('/api/articles', function (request,response){

})


//.post --> components will us this to save an article to database
app.post('/api/articles', function(request, response){

})

//.delete--> components will use this to delete a saved article in db
app.delete('/api/articles', function (request, response){

})










app.listen(3000, function (){
    console.log("server is listening");
} ) 