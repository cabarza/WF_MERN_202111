const { listar, obtener, crear, actualizar, eliminar, cambiaCheck} = require('../controllers/book-controller');

module.exports = (app) => {
    
    app.get('/api/books', listar);
    app.get('/api/books/:id', obtener);
    app.post('/api/books', crear);
    app.put('/api/books/:id', actualizar);
    app.delete('/api/books/:id', eliminar);
    app.patch('/api/books/:id', cambiaCheck);
}