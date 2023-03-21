const mongoose = require('mongoose');
let url = "mongodb+srv://Manan:Manan@manan.dflg9s3.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url).then(() => console.log("Connected")).catch((err) => console.log(err));

module.exports = mongoose;