
const books= [];


module.exports.listar = (req, res) => {
    res.json( { data: books, message: 'Listado de libros', error: false});
}

module.exports.obtener = (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if(book) {
        res.json({ data: book, message: 'Libro encontrado', error: false});
    } else {
        res.json({ data: null, message: 'Libro no encontrado', error: true});
    }
}

module.exports.crear = (req, res) => {
    const book = req.body;
    book.id = books.length > 0?books[books.length-1].id+1:1;
    books.push(book);
    res.json({ data: book, message: 'Libro creado correctamente', error: false});
}

module.exports.actualizar = (req, res) => {
    const book = req.body;
    books.splice(books.findIndex(b=> b.id == req.params.id), 1, book);
    res.json({ data: book, message: 'Libro actualizado correctamente', error: false});
}

module.exports.eliminar = (req, res) => {
    books.splice(books.findIndex(b=> b.id == req.params.id), 1);
    res.json({ data: null, message: 'Libro actualizado correctamente', error: false});
}

