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

const BookForm = (props) => {
    const {id} = useParams();
    let navigate = useNavigate();
    const [inputs, setInputs] = useState(inputsInicial);
    
    const actualizaFormulario = ({target: {name, value}}) => {
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const actualizaFormularioCheckbox = ({target: {name, checked}}) => {
        setInputs({
            ...inputs,
            [name]: checked
        })
    }

    const guardar = (e) => {
        e.preventDefault();
        props.guardar(inputs, id);
        navigate('/books');
    }

    useEffect(() => {
        console.log('ID', id)
        if(id) {
            axios.get('http://localhost:8000/api/books/'+id)
                .then(resp => {
                    if(!resp.data.error) {
                        setInputs(resp.data.data);
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
        <h1>{props.creacion?'Nuevo Libro':props.edicion?`Editar ${inputs.titulo}`:`Ver ${inputs.titulo}`} </h1>
        <Form onSubmit={guardar}>
            <FormGroup>
                <Label>Título</Label>
                <Input name="titulo" value={inputs.titulo} onChange={actualizaFormulario} required minLength={2} maxLength={200}/>
            </FormGroup>
            <FormGroup>
                <Label>Autor</Label>
                <Input name="autor" value={inputs.autor} onChange={actualizaFormulario} required/>
            </FormGroup>
            <FormGroup>
                <Label>Descripción</Label>
                <Input type="textarea" name="descripcion" value={inputs.descripcion} onChange={actualizaFormulario}/>
            </FormGroup>
            <FormGroup>
                <Label>N° de Páginas</Label>
                <Input name="paginas" value={inputs.paginas} onChange={actualizaFormulario} type="number" min={10} max={100}/>
            </FormGroup>
            <FormGroup>
                <Label>Portada</Label>
                <Input type="text" name="portada" value={inputs.portada} onChange={actualizaFormulario}/>
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input type="checkbox" name="check" checked={inputs.check} onChange={actualizaFormularioCheckbox}/>{' '}
                    Check me out
                </Label>
            </FormGroup>
            <Row>
                <Col xs={3}>
                    <Button type="submit">Guardar</Button>
                </Col>
                <Col xs={3}>
                    <Link className="btn btn-primary" to="/books">Volver</Link>
                </Col>
            </Row>
        </Form>
    </>
}

export default BookForm;