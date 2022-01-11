import { Link } from "react-router-dom";
import {Table} from 'reactstrap';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';


const BookList = (props) => {
    return <>
        <nav>
            <Link to="/books/new">Nuevo Libro</Link>
        </nav>
        <h1>Listado de libros</h1>
        <Table>
            <thead>
                <tr>
                    <th>Acciones</th>
                    <th>Id</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Descripción</th>
                    <th>N° de Páginas</th>
                </tr>
            </thead>
            <tbody>
                {props.libros.map((l, i)=> (
                    <tr key={i}>
                        <td>
                            <AiOutlineDelete style={{color:'red', width:'30px', height: '30px', cursor:'pointer'}} onClick={e => props.eliminar(l.id)}></AiOutlineDelete>&nbsp;
                            <Link to={`/books/edit/${l.id}`}><AiOutlineEdit style={{color:'orange', width:'30px', height: '30px', cursor:'pointer'}}></AiOutlineEdit></Link>
                        </td>
                        <td>{l.id}</td>
                        <td>{l.titulo}</td>
                        <td>{l.autor}</td>
                        <td>{l.descripcion}</td>
                        <td>{l.paginas}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </>
}

export default BookList;