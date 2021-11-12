var mongoose = require('mongoose');
// Setup schema
var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }
});

// Export Book model

var Book = module.exports = mongoose.model('book', bookSchema);
module.exports.get = function (callback, limit) {
    Book.find(callback).limit(limit);
}