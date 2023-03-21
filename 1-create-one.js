let Member = require('./model');

let obj = new Member({
    name : "Jonsan",
    age : 21
});

(async () => {
    try{
        await obj.save();
        console.log("Data inserted");
    }catch(err){
        console.log(err);
    }
})();
