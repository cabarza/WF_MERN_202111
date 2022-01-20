const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors());
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require('./config/mongo.config');

app.get('/api', (req, res) => {
    res.json({mensaje: 'Hola a Tod@s, como estan??!!!'});
});

require('./routes/book-routes')(app);

app.listen(port, () => console.log('El servidor esta escuchando en el puerto ' + port));