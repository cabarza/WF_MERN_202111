import { useState } from 'react';
import { Col, Container, Row, Table } from 'reactstrap';
import Formulario from './form';
import Vista from './view';

const initialState = {
    nombre:'',
    apellido: '',
    edad: 0,
    email: '',
    tipo: '',
    envio: false,
    genero: ''
}

const Listado = () => {
    
    const [data, setData] = useState([]);
    const [inputs, setInputs] = useState(initialState);
    
    const agregar = (elemento) => {
        setData([...data, elemento]);
        setInputs(initialState);
    }


    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <Formulario inputs={inputs} agregar={agregar} setInputs={setInputs}/>
                </Col>
                <Col xs={12} md={6}>
                    <Vista inputs={inputs} />
                </Col>
            </Row>
            <Row className="mt-4">
                <Table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Edad</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.map((e, i) => <tr key={i}>
                            <td>{e.nombre}</td>
                            <td>{e.apellido}</td>
                            <td>{e.edad}</td>
                            <td>{e.email}</td>
                        </tr>) }
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}

export default Listado;