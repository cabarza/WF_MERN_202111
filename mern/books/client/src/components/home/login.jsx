import axios from "axios";
import { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import Swal from "sweetalert2";

const Login = (props) => {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const login = e => {
        e.preventDefault();
        axios.post('/api/login', inputs).then(resp => {
            if(resp.error) {
                Swal.fire('Error', 'El usuario o clave no son válidos', 'error');
            } else {
                props.setLogin(true);
            }
        })
    }

    const actualizarInputs = ({target: {name, value}}) => {
        setInputs({...inputs, [name]: value});
    }

    return (
        <>
            <div className="container">
                <Form onSubmit={login}>
                    <Row>
                        <Col >
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input name="email" id="email" value={inputs.email} onChange={actualizarInputs}/>
                            </FormGroup>
                        </Col>   
                        <Col >
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input name="password" id="password" type="password" value={inputs.password} onChange={actualizarInputs}/>
                            </FormGroup>
                        </Col>   
                    </Row> 

                    <Button type="submit">Login</Button>
                </Form>
            </div>
        </>
    )
}

export default Login;