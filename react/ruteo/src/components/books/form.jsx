import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const inputsInicial = {
    titulo:'',
    autor: '', 
    descripcion: '',
    paginas:0
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

    const guardar = (e) => {
        e.preventDefault();
        props.guardar(inputs, id);
        navigate('/books');
    }

    useEffect(() => {
        console.log('ID', id)
        if(id) {
            setInputs(props.libros.find(l => l.id == id));
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
                <Input name="titulo" value={inputs.titulo} onChange={actualizaFormulario} required minLength={2}/>
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
                <Input name="paginas" value={inputs.paginas} onChange={actualizaFormulario} type="number" min={10}/>
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