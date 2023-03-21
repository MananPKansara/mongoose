const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
let url = "mongodb+srv://Manan:Manan@manan.dflg9s3.mongodb.net/manan?retryWrites=true&w=majority";

(async () => {
    try{
        connection = await mongoose.connect(url);
        console.log("Connection done to database : " + mongoose.connection.name);
    }catch(err){
        console.log("Connection established");
    }
})();

let schema = new mongoose.Schema({
    id : Number,
    name : {
        type : String,
        required : true,
        lowercase : true,
        trim : true,
        minLength : [3, "Name should have atleast 3 characters"],
        maxLength : 20
    },
    gender : {
        type : String,
        required : true,
        lowercase : true,
        enum : ['male', 'female'],
        trim : true,
        minLength : 4,
        maxLength : 6
    },
    age : {
        type : Number,
        validate(value){ // here value paramtere will bo automatically set
            if(value<0)
            throw new Error("Age must me positive value");
        },
        required : true,
    },
    technology : {
        type : String,
        required : true,
        trim : true,
        minLength : 3,
        maxLength : 20
    },
    salary : {
        type : Number,
        required : true,
        min : 1000
    }
});

// schema.plugin(AutoIncrement, {inc_field: 'userId'});
schema.plugin(AutoIncrement, {inc_field: 'userId', disable_hooks: true});
console.log(schema);


// schema.paths.name.validators[0].message = "Thay gayu";
// console.log(schema.paths.name.validators[0]);

let Entry = mongoose.model('Entry', schema);

let manan = new Entry({
    name : "      Manan    ",
    gender : "male",
    age : 20,
    technology : 'NodeJS',
    salary : 5000
});

let harsh = new Entry({
    name : "Harsh",
    gender : "male",
    age : 21,
    technology : 'React',
    salary : 10000
});

let abhi = new Entry({
    name : "Abhi",
    gender : 'male' ,
    age : 21,
    technology : 'React',
    salary : 4000
});

let khushi = new Entry({
    name : "Khushi",
    gender : 'female',
    age : 21,
    technology : 'NodeJS',
    salary : 15000
});

let shivangi = new Entry({
    name : "Shivangi",
    gender : 'female',
    age : 20,
    technology : 'NodeJS',
    salary : 3000
});

(async () => {
    
    try{

        let insert = await Entry.insertMany([manan, harsh, abhi, khushi, shivangi]);
        console.log(insert);
        console.log("Data inserted");

    }catch(err){
        console.log(err);
    }

})();
