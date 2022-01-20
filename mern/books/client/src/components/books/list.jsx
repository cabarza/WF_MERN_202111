import { Link } from "react-router-dom";
import {Table} from 'reactstrap';
import {AiOutlineDelete, AiOutlineEdit, AiOutlineEye} from 'react-icons/ai';


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
                    <th>Check</th>
                    <th>Portada</th>
                </tr>
            </thead>
            <tbody>
                {props.libros.map((l, i)=> (
                    <tr key={i}>
                        <td>
                            <AiOutlineDelete style={{color:'red', width:'30px', height: '30px', cursor:'pointer'}} onClick={e => props.eliminar(l._id)}></AiOutlineDelete>&nbsp;
                            <Link to={`/books/edit/${l._id}`}><AiOutlineEdit style={{color:'orange', width:'30px', height: '30px', cursor:'pointer'}}></AiOutlineEdit></Link>
                            <Link to={`/books/view/${l._id}`}><AiOutlineEye style={{color:'green', width:'30px', height: '30px', cursor:'pointer'}}></AiOutlineEye></Link>
                        </td>
                        <td>{l._id}</td>
                        <td>{l.titulo}</td>
                        <td>{l.autor}</td>
                        <td>{l.descripcion}</td>
                        <td>{l.paginas}</td>
                        <td>{l.check?'SI':'NO'}</td>
                        <td>
                            <img style={{width: '50px', height:'50px'}} src={l.portada} alt="Portada"/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </>
}

export default BookList;