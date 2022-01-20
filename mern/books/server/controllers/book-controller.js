const Book = require('../models/book.model');

module.exports.listar = (req, res) => {
    Book.find({})
    .then(data => res.json( { data: data, message: null, error: false}))
    .catch(error => res.json( { data: null, message: error, error: true}))
}

module.exports.obtener = (req, res) => {
    Book.findById(req.params.id)
    .then(data => res.json( { data: data, message: null, error: false}))
    .catch(error => res.json( { data: null, message: error, error: true}))
}

module.exports.crear = (req, res) => {
    const book = req.body;
    Book.create(book)
    .then(data => res.json( { data: data, message: null, error: false}))
    .catch(error => res.json( { data: null, message: error, error: true}))
}

module.exports.actualizar = (req, res) => {
    const book = req.body;
    Book.findByIdAndUpdate(req.params.id, book)
    .then(data => res.json( { data: book, message: null, error: false}))
    .catch(error => res.json( { data: null, message: error, error: true}))
}

module.exports.eliminar = (req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(data => res.json( { data: data, message: null, error: false}))
    .catch(error => res.json( { data: null, message: error, error: true}));
}

module.exports.cambiaCheck = (req, res) => {
    Book.findById(req.params.id)
    .then(book => {
        if(book) {
            book.check = !book.check;
            Book.findByIdAndUpdate(req.params.id, book)
            .then(data => res.json( { data: book, message: null, error: false}))
            .catch(error => res.json( { data: null, message: error, error: true}));
        } else {
            res.json( { data: null, message: 'El libro no existe', error: true})
        }
    }).catch(error => res.json( { data: null, message: error, error: true}));
}

