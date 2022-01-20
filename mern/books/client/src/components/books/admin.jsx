import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import BookForm from "./form";
import BookList from "./list";
import Swal from 'sweetalert2';
import axios from 'axios';
import BookView from "./view";

const BookAdmin = (props) => {
    const [libros, setLibros] = useState([]);
    const [act, setAct] = useState(false);


    const crear = (data, id) =>{
        axios.post('http://localhost:8000/api/books', data)
        .then(resp => {
            if(!resp.data.error) {
                setLibros([...libros, resp.data.data]);
            } else {
                Swal.fire('Error!!!', resp.data.message, 'error');
            }
        }).catch(error => Swal.fire('Error!!!', 'Error, por favor inténtelo mas tarde', 'error'));
    }

    const actualizar = (data, id) =>{
        axios.put('http://localhost:8000/api/books/' + id, data)
        .then(resp => {
            if(!resp.data.error){
                const indice = libros.findIndex(l => l._id == id);
                const lista = [...libros];
                lista.splice(indice, 1, resp.data.data);
                setLibros(lista);
            } else {
                Swal.fire('Error!!!', resp.data.message, 'error');
            }
        }).catch(error => Swal.fire('Error!!!', 'Error, por favor inténtelo mas tarde', 'error'));
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
                axios.delete('http://localhost:8000/api/books/' + id)
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
    
    useEffect(()=>{
        props.setTitulo('Librería');
        axios.get('http://localhost:8000/api/books')
            .then(resp => {
                if(!resp.data.error) {
                    setLibros(resp.data.data);
                }else {
                    Swal.fire('Error!!!', resp.data.message, 'error');
                }
            }).catch(error => Swal.fire('Error!!!', 'Error, por favor inténtelo mas tarde', 'error'));
    }, [act])

    return <>
        <Routes>
            <Route path="/" element={<BookList libros={libros} eliminar={eliminar}/>} />
            <Route path="/new" element={<BookForm creacion={true} guardar={crear}/>} />
            <Route path="/edit/:id" element={<BookForm edicion={true} guardar={actualizar} libros={libros}/>} />
            <Route path="/view/:id" element={<BookView visualizacion={true} actualizar={act} setActualizar={setAct}/>} />
        </Routes>
    </>
}

export default BookAdmin;