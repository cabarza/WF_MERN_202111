const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/books', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(resp => console.log('Conexión a la BD exitosa'))
    .catch(error => console.log('Ha ocurrido un error al conectarse a la BD', error));