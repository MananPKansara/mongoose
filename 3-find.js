let Member = require('./model');

(async () => {
    try{
        let result = "";
        
        // result = await Member.find({age : {$gt : 20}}).select({name : 1, _id : 0});
        // console.log(result);
        // alternate code
        // let result = await Member.find({name : "Manan"},{name : 1});
        
        // result = await Member.find({name : {$in : ["Manan", "Harsh"]}});
        // console.log(result);
        
        // result = await Member.find({$and : [ {age : { $lt : 22 } }, { age : { $gt : 20 } } ]});
        // console.log(result);
        
        // result = await Member.find().countDocuments();
        // console.log(result);

        // result = await Member.find().sort({name : 1});
        // console.log(result);

        // The reason why sort only works with find in Mongoose is because sort modifies the results of a find query.
        // result = await Member.sort({name : 1}).find();
        // console.log(result);

        // result = await Member.find().sort({age : -1});
        // console.log(result);

        result = await Member.findById("64072ea33e3a308b24393b2d");
        console.log(result);

    }catch(err){
        console.log(err);
    }
})();

