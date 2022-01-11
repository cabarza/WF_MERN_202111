import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import BookForm from "./form";
import BookList from "./list";
import Swal from 'sweetalert2';

const BookAdmin = (props) => {
    const [libros, setLibros] = useState([]);


    const crear = (data, id) =>{
        if(libros.length > 0) {
            data.id = libros[libros.length-1].id + 1;
        } else {
            data.id = 1;
        }
        setLibros([...libros, data]);
    }

    const actualizar = (data, id) =>{
        const indice = libros.findIndex(l => l.id == id);
        const lista = [...libros];
        lista.splice(indice, 1, data);
        setLibros(lista);
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
                const lista = libros.filter(l => l.id != id);
                setLibros(lista);
            }
        });
    }
    
    useEffect(()=>{
        props.setTitulo('Librería');
    }, [])

    return <>
        <Routes>
            <Route path="/" element={<BookList libros={libros} eliminar={eliminar}/>} />
            <Route path="/new" element={<BookForm creacion={true} guardar={crear}/>} />
            <Route path="/edit/:id" element={<BookForm edicion={true} guardar={actualizar} libros={libros}/>} />
            <Route path="/view/:id" element={<BookForm visualizacion={true}/>} />
        </Routes>
    </>
}

export default BookAdmin;