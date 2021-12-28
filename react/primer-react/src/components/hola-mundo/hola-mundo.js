import HolaMundo2 from "./hola-mundo-clazz"


const HolaMundo = ({nombre}) => {

    const alertar = () => {
        alert('Este es el alert desde Hola Mundo');
    }

    return (
        <>
            <h1>Hola {nombre}!!!</h1>
            <HolaMundo2 nombre="Otro" apellido="Apellido" alertar={alertar}></HolaMundo2>
        </>
    );

}

export default HolaMundo;