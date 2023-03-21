let Member = require('./model');

(async () => {
    try{
        let result = await Member.deleteOne( { _id : '64072e4ad94e751e6d3b72e7' } );
        // result = await Member.findByIdAndDelete( { _id : '64072e4ad94e751e6d3b72e7' } );// return which document is deleted
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
})();