const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    title: String,
    description: String,
    author: String,
    rating: Number
  },
  {
    timestamps: true
  }
);

// The first argument is the singular name of the collection that will be created in the MongoDB database. In this case, it's "Book". Mongoose automatically pluralizes this name to create the name of the collection in MongoDB unless explicitly specified otherwise.
// The second argument is the schema definition for the collection. In this case, bookSchema represents the schema that defines the structure of documents in the "Book" collection.
module.exports = model("Book", bookSchema);
