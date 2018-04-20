var express = require('express');
var cheerio = require('cheerio');
var bodyParser = require('body-parser');
//var mongoose =

var port = 3000;

var app = express(); 
 app.use(express.static(__dirname + '/client/build/'));
//CRUD --get, put, post, delete

app.get( '/', function(request, response) {
    response.sendFile(__dirname + '/client/build/index.html');
    console.log(__dirname);
})










app.listen(3000, function (){
    console.log("server is listening");
} ) 