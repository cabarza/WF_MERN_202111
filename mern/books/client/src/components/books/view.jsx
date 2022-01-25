import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Swal from "sweetalert2";

const inputsInicial = {
    titulo:'',
    autor: '', 
    descripcion: '',
    paginas:0,
    portada: '',
    check: false
}

const BookView = (props) => {

    const [data, setData] = useState(inputsInicial);

    const {id} = useParams();
    let navigate = useNavigate();

    const actualizarCheck = (e) => {
        e.preventDefault();
        axios.patch('/api/books/' + id)
        .then(resp => {
            if(!resp.data.error) {
                props.setActualizar(!props.actualizar);
            }else {
                Swal.fire('Error!!!', resp.data.message, 'error');
            }
        }).catch(error => Swal.fire('Error!!!', 'Error, por favor inténtelo mas tarde', 'error'));
        navigate('/books');
    }

    useEffect(() => {
        if(id) {
            axios.get('/api/books/'+id)
                .then(resp => {
                    if(!resp.data.error) {
                        setData(resp.data.data);
                    }else {
                        Swal.fire('Error!!!', resp.data.message, 'error');
                    }
                }).catch(error => Swal.fire('Error!!!', 'Error, por favor inténtelo mas tarde', 'error'));
            
        }
    }, [])

    return <>
        <nav>
            <Link to="/books">Volver</Link>
        </nav>
        <h1>{`Ver ${data.titulo}`} </h1>
            <FormGroup>
                <Label>Título</Label>
                <Input plaintext name="titulo" value={data.titulo} readOnly/>
            </FormGroup>
            <FormGroup>
                <Label>Autor</Label>
                <Input plaintext name="autor" value={data.autor} readOnly/>
            </FormGroup>
            <FormGroup>
                <Label>Descripción</Label>
                <Input plaintext type="textarea" name="descripcion" value={data.descripcion} readOnly/>
            </FormGroup>
            <FormGroup>
                <Label>N° de Páginas</Label>
                <Input plaintext name="paginas" value={data.paginas} readOnly/>
            </FormGroup>
            <Row className="mb-5">
                <img style={{width: '100px', height:'100px'}} src={data.portada} alt="Portada"/>
            </Row>
            <Row className="mb-5">
                <Button onClick={actualizarCheck} color={data.check?'success':'danger'}>Cambiar</Button>
            </Row>
            <Row>
                <Col xs={3}>
                    <Link className="btn btn-primary" to="/books">Volver</Link>
                </Col>
            </Row>
    </>
}

export default BookView;