let {mongoose, schema} = require('./schema');

// a model is always created based on a schema. 
// A schema defines the structure and properties of the document that will be stored in the database, while a model provides an interface to interact with the database and perform CRUD (Create, Read, Update, Delete) operations.

module.exports = new mongoose.model('Member', schema);
