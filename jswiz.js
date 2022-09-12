var mongoose = require('mongoose')
var Schema = mongoose.Schema

//Datatypes in mongodb
var BookSchema = new Schema({
    title : String,
    published : {
        type : Date,
        default : Date.now
    } ,
    keywords : Array,
    published : boolean,
    author : {
        type:Schema.ObjectId,
        ref : 'User'
    },
    //embeded Sub-document
    detail : {
        modelNumber : Number,
        hardcover : Boolean,
        reviews : Number,
        rank : Number
    }
})
module.exports = mongoose.model('Book',BookSchema)