const {Router} = require('express');
const router = Router();

const { getBook, UpdateBook, getBooks, CreateBook, DeleteBook } = require('../controllers/BookController');

router.route('/')  
            .get(getBook)
            .post(CreateBook)
    
router.route('/:id')
            .get(getBooks)
            .put(UpdateBook)
            .delete(DeleteBook)

module.exports = router;