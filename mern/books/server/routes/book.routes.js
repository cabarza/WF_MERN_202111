const { listar, obtener, crear, actualizar, eliminar, cambiaCheck} = require('../controllers/book.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    
    app.get('/api/books', authenticate, listar);
    app.get('/api/books/:id', authenticate, obtener);
    app.post('/api/books', authenticate, crear);
    app.put('/api/books/:id', authenticate, actualizar);
    app.delete('/api/books/:id', authenticate, eliminar);
    app.patch('/api/books/:id', authenticate, cambiaCheck);
}