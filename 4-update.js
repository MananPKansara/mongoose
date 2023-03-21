let Member = require('./model');

(async () => {
    // let update = await Member.updateOne({name : "Khushi"}, {age : 25});
    // update = await Member.updateOne({name : "Khushi"}, { $set : {age : 26}});
    // console.log(update);

    // let id = "640702ef6f9fd108e1642b5e";
    // let update = { age : "21" };
    // let update1 = await Member.findByIdAndUpdate(id, update, { new : true });
    // //  { new: true } as the options object to return the updated document instead of the original document.
    // console.log(update1);

    let result = await Member.find();
    console.log(result);
})();