let mongoose = require('./connection');

let schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : Number,
    time : {
        type : Date,
        default : currentTime
    }
});

function currentTime()
{
    return Date.now();
}

module.exports = {mongoose, schema};