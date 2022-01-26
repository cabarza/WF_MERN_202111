const { registrar, login } = require('../controllers/user.controller');

module.exports = (app) => {
    
    app.post('/api/user', registrar);
    app.post('/api/login', login);
}