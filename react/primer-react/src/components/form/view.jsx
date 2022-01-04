import {FormGroup, Input, Label, Row } from "reactstrap";

const Vista = ({inputs}) => {

    return (
        <Row className="mt-5">
            <FormGroup>
                <Label for="nombre">Nombre</Label>
                <Input type="text" id="nombre" name="nombre" value={inputs.nombre} readOnly/>
            </FormGroup>
            <FormGroup>
                <Label for="apellido">Apellido</Label>
                <Input type="text" id="apellido" name="apellido" value={inputs.apellido} readOnly/>
            </FormGroup>
            <FormGroup>
                <Label for="edad">Edad</Label>
                <Input type="number" id="edad" name="edad" value={inputs.edad} readOnly/>
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" id="email" name="email" value={inputs.email} readOnly/>
            </FormGroup>
            <FormGroup>
                <Label for="tipo">Tipo</Label>
                <Input type="text" id="tipo" name="tipo" value={inputs.tipo} readOnly/>
            </FormGroup> 
            <FormGroup check>
                <Input type="checkbox" name="envio" checked={inputs.envio} disabled/>{' '}
                <Label check>Enviar Información</Label>
            </FormGroup>
            <FormGroup tag="fieldset">
                <legend>Genero</legend>
                <FormGroup check>
                    <Input name="genero" type="radio" value="F" checked={inputs.genero == 'F'} disabled/>
                    {' '}
                    <Label check>Femenino</Label>
                </FormGroup>
                <FormGroup check>
                    <Input name="genero" type="radio" value="M" checked={inputs.genero == 'M'} disabled/>
                    {' '}
                    <Label check>Masculino</Label>
                </FormGroup>
            </FormGroup>     
        </Row>
    );


}

export default Vista;