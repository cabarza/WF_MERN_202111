import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import BookForm from "./form";
import BookList from "./list";
import Swal from 'sweetalert2';
import axios from 'axios';
import BookView from "./view";
import SocketContext from "../../context/socket-context";

const BookAdmin = (props) => {
    const [libros, setLibros] = useState([]);
    const [otrosLibros, setOtrosLibros] = useState([]);
    const [act, setAct] = useState(false);
    const {socket} = useContext(SocketContext);


    const crear = (data, id, successCallback, errorCalback) =>{
        axios.post('/api/books', data)
        .then(resp => {
            if(!resp.data.error) {
                setLibros([...libros, resp.data.data]);
                successCallback();
            } else {
                errorCalback(resp.data.message);
                // Swal.fire('Error!!!', resp.data.message, 'error');
            }
        }).catch(error => errorCalback(error));
    }

    const actualizar = (data, id, successCallback, errorCalback) =>{
        axios.put('/api/books/' + id, data)
        .then(resp => {
            if(!resp.data.error){
                const indice = libros.findIndex(l => l._id == id);
                const lista = [...libros];
                lista.splice(indice, 1, resp.data.data);
                setLibros(lista);
                successCallback();
            } else {
                errorCalback(resp.data.message);
                // Swal.fire('Error!!!', resp.data.message, 'error');
            }
        }).catch(error => errorCalback(error));
    }

    const eliminar = (id) => {
        Swal.fire({
            title: 'Eliminar Libro',
            text: '¿Está seguro de eliminar el libro seleccionado?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminalo!!!'
        }).then(resp => {
            if(resp.isConfirmed) {
                axios.delete('/api/books/' + id)
                .then(resp => {
                    if(!resp.data.error){
                        const lista = libros.filter(l => l._id != id);
                        setLibros(lista);
                    } else {
                        Swal.fire('Error!!!', resp.data.message, 'error');
                    }
                }).catch(error => Swal.fire('Error!!!', 'Error, por favor inténtelo mas tarde', 'error'));
            }
        });
    }

    const reservar = (book) => {
        socket.emit('book_reservation', book);
        book.reserved = true;
        const indice = libros.findIndex(l => l._id == book._id);
        const ls = [...libros];
        ls.splice(indice, 1, book);
        setLibros(ls);
    }

    const eliminarOtro = (id) => {
        Swal.fire({
            title: 'Eliminar Libro',
            text: '¿Está seguro de eliminar el libro seleccionado?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminalo!!!'
        }).then(resp => {
            if(resp.isConfirmed) {
                axios.delete('/api/books/' + id)
                .then(resp => {
                    if(!resp.data.error){
                        const lista = otrosLibros.filter(l => l._id != id);
                        setOtrosLibros(lista);
                    } else {
                        Swal.fire('Error!!!', resp.data.message, 'error');
                    }
                }).catch(error => Swal.fire('Error!!!', 'Error, por favor inténtelo mas tarde', 'error'));
            }
        });
    }

    const reservarOtro = (book) => {
        socket.emit('book_reservation', book);
        book.reserved = true;
        const indice = otrosLibros.findIndex(l => l._id == book._id);
        const ls = [...otrosLibros];
        ls.splice(indice, 1, book);
        setOtrosLibros(ls);
    }
    
    useEffect(()=>{
        props.setTitulo('Librería');
        axios.get('/api/books')
            .then(resp => {
                if(!resp.data.error) {
                    setLibros(resp.data.data);
                }else {
                    Swal.fire('Error!!!', resp.data.message, 'error');
                }
            }).catch(error => Swal.fire('Error!!!', 'Error, por favor inténtelo mas tarde', 'error'));

        axios.get('/api/books/otros')
            .then(resp => {
                if(!resp.data.error) {
                    setOtrosLibros(resp.data.data);
                }else {
                    Swal.fire('Error!!!', resp.data.message, 'error');
                }
            }).catch(error => Swal.fire('Error!!!', 'Error, por favor inténtelo mas tarde', 'error'));
        
    }, [act]);

    socket.on('book_reserved', data => {
        console.log('book_reserved', data, libros);
        const indice = libros.findIndex(l => l._id == data._id);
        const ls = [...libros];
        ls.splice(indice, 1, data);
        setLibros(ls);
    });

    return <>
        <Routes>
            <Route path="/" element={<>
                <BookList libros={libros} eliminar={eliminar} reservar={reservar}/>
                <BookList libros={otrosLibros} eliminar={eliminarOtro} reservar={reservarOtro}/>
            </>} />
            <Route path="/new" element={<BookForm creacion={true} guardar={crear}/>} />
            <Route path="/edit/:id" element={<BookForm edicion={true} guardar={actualizar} libros={libros}/>} />
            <Route path="/view/:id" element={<BookView visualizacion={true} actualizar={act} setActualizar={setAct} />} />
        </Routes>
    </>
}

export default BookAdmin;