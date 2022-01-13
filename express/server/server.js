const express = require('express');
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get('/api', (req, res) => {
    res.json({mensaje: 'Hola a Tod@s, como estan??!!!'});
});

require('./routes/book-routes')(app);

app.listen(port, () => console.log('El servidor esta escuchando en el puerto ' + port));