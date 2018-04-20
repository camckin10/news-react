//use this to create Article Schema 

//require mongoose
var mongoose = require('mongoose');

//create a Schema class 
var Schema = mongoose.Schema;

//create Article schema
var ArticleSchema = new Schema ({

    //title 
    title : {
        type:String,
        required:true
    }, 
    //date
    date : {
        type:String,
        required:true
    }, 
    //url
    url : {
        type:String,
        required:true
    }

}); 

//create Article model with Mongoose
var Article = mongoose.model('Article', ArticleSchema);

//export model
module.exports = Article; 

