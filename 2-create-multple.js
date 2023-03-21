let Member = require('./model');

let obj1 = new Member({
    name : "Manan",
    age : 20,
});

let obj2 = new Member({
    name : "Harsh",
    age : 21,
});

let obj3 = new Member({
    name : "Khushi",
    age : 22,
})

// here last to feild will not be added due to defination of scham
let obj4 = new Member({
    name : "Shivangi",
    age : 23,
    salary : 35000,
    gender : "female"
});

(async () => {
    try{
        await Member.insertMany([obj1, obj2, obj3, obj4]);
        console.log("Data inserted");
    }catch(err){
        console.log(err);
    }
})();

