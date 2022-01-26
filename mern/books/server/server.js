const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000/'}));
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

require('./config/mongo.config');

app.get('/api', (req, res) => {
    res.json({mensaje: 'Hola a Tod@s, como estan??!!!'});
});

require('./routes/user.routes')(app);
require('./routes/book.routes')(app);

const server = app.listen(port, () => console.log('El servidor esta escuchando en el puerto ' + port));

const io = require('socket.io')(server);

io.on("connection", socket => {
    console.log(socket.id);

    socket.on("book_reservation", data => {
        data.reserved = true;
        socket.broadcast.emit('book_reserved', data);
    });
});
