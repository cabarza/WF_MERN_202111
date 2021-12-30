import { useState } from "react"

const initialState = {
    nombre:'',
    apellido: '',
    edad: 0,
    email: '' 
}

const Formulario = (props) => {

    const [inputs, setInputs] = useState(initialState);

    const actualizarFormulario = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const enviarFormulario = (e) => {
        e.preventDefault();
        console.log(inputs);
        setInputs(initialState);
    }


    return (
        <form onSubmit={enviarFormulario}>
            <br></br>
            <label>Nombre:</label>
            <input type="text" name="nombre" value={inputs.nombre} onChange={e => actualizarFormulario(e)}/>
            <br></br>
            <label>Apellido:</label>
            <input type="text" name="apellido" value={inputs.apellido} onChange={actualizarFormulario}/>
            <br></br>
            <label>Edad:</label>
            <input type="number" name="edad" value={inputs.edad} onChange={actualizarFormulario}/>
            <br></br>
            <label>Email:</label>
            <input type="email" name="email" value={inputs.email} onChange={actualizarFormulario}/>
            <br></br>
            <button type="submit">Enviar</button>
        </form>
    );


}

export default Formulario;