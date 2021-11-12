let router = require('express').Router();

router.get('/', function(req,res) {
    res.json({
        status: 'Api is working',
        message: 'Welcome to the Book library'
    });
});

//  book - title, author, year
//  GET api/books - return all books
//  POST api/books - add new book
//  PUT api/book/{id} = update one book
//  DELETE api/book/{id} delete one book

var bookController = require('./bookController');

router.route('/books')
    .get(bookController.index)
    .post(bookController.new);


router.route('/books/:book_id')
    .get(bookController.view)
    .patch(bookController.update)
    .put(bookController.update)
    .delete(bookController.delete);

module.exports = router;



