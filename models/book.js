// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generate Schema
const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: [{ type: String, required: true}],
    description: {type: String, required: true},
    image: {type: String, required: true},
    link: {type: String, required: true},
    date: {type: Date, default: Date.now } 
});
//Set schema to a variable
const Book = mongoose.model("Book", bookSchema);

// Export variable
module.exports = Book;
