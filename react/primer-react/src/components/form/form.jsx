import { useState } from "react"
import { Button, Form, FormGroup, Input, Label } from "reactstrap";



const Formulario = ({inputs, setInputs, agregar}) => {

    const actualizarFormulario = (e, check) => {
        const {name, value, checked} = e.target;
        setInputs({
            ...inputs,
            [name]: check ? checked: value
        })
    }

    const actualizarFormularioCheck = (e) => {
        const {name, checked} = e.target;
        setInputs({
            ...inputs,
            [name]: checked
        })
    }

    const actualizarFormularioRadio = e => {
        const {name, checked, value} = e.target;
        console.log(name, checked, value);
        if(checked) {
            setInputs({
                ...inputs,
                [name]: value
            })
        }
    }

    const enviarFormulario = (e) => {
        e.preventDefault();
        agregar(inputs);
    }


    return (
        <>
            <Form onSubmit={enviarFormulario} className="mt-5">
                <FormGroup>
                    <Label for="nombre">Nombre</Label>
                    <Input type="text" id="nombre" name="nombre" value={inputs.nombre} onChange={e => actualizarFormulario(e, false)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="apellido">Apellido</Label>
                    <Input type="text" id="apellido" name="apellido" value={inputs.apellido} onChange={e => actualizarFormulario(e, false)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="edad">Edad</Label>
                    <Input type="number" id="edad" name="edad" value={inputs.edad} onChange={e => actualizarFormulario(e, false)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" id="email" name="email" value={inputs.email} onChange={e => actualizarFormulario(e, false)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="tipo">Tipo</Label>
                    <Input type="select" id="tipo" name="tipo" value={inputs.tipo} onChange={e => actualizarFormulario(e, false)}>
                        <option value="">Seleccione</option>
                        <option value="tipo1">Tipo 1</option>
                        <option value="tipo2">Tipo 2</option>
                    </Input>
                </FormGroup>
                <FormGroup check>
                    <Input type="checkbox" name="envio" checked={inputs.envio} onChange={actualizarFormularioCheck}/>{' '}
                    <Label check>Enviar Información</Label>
                </FormGroup>
                <FormGroup tag="fieldset">
                    <legend>Genero</legend>
                    <FormGroup check>
                        <Input name="genero" type="radio" value="F" onChange={actualizarFormularioRadio}/>
                        {' '}
                        <Label check>Femenino</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input name="genero" type="radio" value="M" onChange={actualizarFormularioRadio}/>
                        {' '}
                        <Label check>Masculino</Label>
                    </FormGroup>
                </FormGroup>

                <Button type="submit" color="success">Enviar</Button>
            </Form>
        </>
    );


}

export default Formulario;