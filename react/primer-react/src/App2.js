import { useState } from 'react';
import HolaMundo from './components/hola-mundo/hola-mundo';
import HolaMundo2 from './components/hola-mundo/hola-mundo-clazz';

function App() {

  const [contadorPadre, setContadorPadre] = useState(0);


  const alertarFn = () => {
    alert('Esta es una alerta');
  }

  return (
    <div>
      <HolaMundo nombre="Carlos" contadorPadre={contadorPadre} setContadorPadre={setContadorPadre}/>
      <div>
        <HolaMundo2 nombre="Juan" apellido="Nuñez" alertar={alertarFn}  contadorPadre={contadorPadre} setContadorPadre={setContadorPadre}>
          <ul id="ul1">
            <li>Item 11</li>
            <li>Item 12</li>
            <li>Item 13</li>
          </ul>
        </HolaMundo2>
        <ul id="ul2">
            <li>Item 21</li>
            <li>Item 22</li>
            <li>Item 23</li>
          </ul>
      </div>
      <h2>Contador del padre: {contadorPadre}</h2> 
    </div>
  );
}

export default App;
