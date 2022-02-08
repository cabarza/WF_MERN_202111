const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, 'El título es requerido'],
        minlength: [2, 'El largo del título debe ser de almenos 2 caracteres']
    },
    autorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'El autor es requerido']
    },
    descripcion: {
        type: String,
        required: [true, 'Debe ingresar la descripción del libro']
    },
    paginas: {
        type: Number,
        required: [true, 'Debe ingresar el número de páginas del libro'],
        min: [10, 'El libro no puede tener menos de 10 páginas'],
        max: [1000, 'El libro no puede tener mas de 1000 páginas']
    },
    estado: String,
    portada: {
        type: String
    },
    check: Boolean
}, {timestamps: true});

BookSchema.virtual('user', {
    ref: 'User',
    localField: 'autorId',
    foreignField: '_id'
});

BookSchema.set('toObject', { virtuals: true });
BookSchema.set('toJSON', { virtuals: true });

const Book = mongoose.model("Book", BookSchema);

module.exports=Book;