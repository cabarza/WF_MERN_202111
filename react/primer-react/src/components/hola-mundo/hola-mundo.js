import HolaMundo2 from "./hola-mundo-clazz"
import '../../App.css'
import { useState } from "react";


const HolaMundo = (props) => {


    const [valor, setValor] = useState('');
    const [contador, setContador] = useState(0);

    const estilo = {
        backgroundColor: 'green',
        color: 'white'
    }

    const {nombre} = props;
    const alertar = () => {
        alert('Este es el alert desde Hola Mundo');
    }

    const cambiaValor = (e) => {
        setValor('Nuevo Valor');
    }

    return (
        <>
            <h1 className="App">Hola {nombre}!!! {valor}</h1>
            <HolaMundo2 nombre="Otro" apellido="Apellido" alertar={alertar} contadorPadre={props.contadorPadre} setContadorPadre={props.setContadorPadre}></HolaMundo2>

            <h3>Cantidad de Clicks: {contador}</h3>

            <button type="button" onClick={cambiaValor}>Cambiar Valor</button>

            <button onClick={e => setContador(contador + 1)}>Click Me!!!</button>
        </>
    );

}

export default HolaMundo;