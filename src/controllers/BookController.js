const BookCtrl = {}

const BooksModel = require('../models/books');

BookCtrl.getBook = async (req,res) => {
    const Books = await BooksModel.find();
    res.json({
        status: 204,
        message: "Libros Encontrados",
        data: Books
    });
}

BookCtrl.getBooks = async (req,res) => {
    const Book = await BooksModel.findById(req.params.id)
    res.json({
        status: 204,
        message: "Libro Encontrado",
        data: Book
    });
}

BookCtrl.CreateBook = async (req,res) => {
    const {title, description, gender, author} = req.body;

    const NewBook = new BooksModel({
        title,
        description,
        gender,
        author
    });
    await NewBook.save();
    res.json({
        status: 201,
        message: "Libro Creado",
    });
}

BookCtrl.UpdateBook = async (req,res) => {
    const {title, description, gender, author} = req.body;

    await BooksModel.findOneAndUpdate({_id: req.params.id}, {
        title,
        description,
        gender,
        author
    });
    res.json({
        status: 204,
        message: "Libro Actualizado",
    });
}

BookCtrl.DeleteBook = async (req,res) => {
    await BooksModel.findByIdAndDelete(req.params.id)
    res.json({
        status: 204,
        message: "Libro Eliminado"
    });
}

module.exports = BookCtrl;