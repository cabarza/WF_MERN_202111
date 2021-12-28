import HolaMundo from './components/hola-mundo/hola-mundo';
import HolaMundo2 from './components/hola-mundo/hola-mundo-clazz';

function App() {
  const alertarFn = () => {
    alert('Esta es una alerta');
  }

  return (
    <div>
      <HolaMundo nombre="Carlos"/>
      <div>
        <HolaMundo2 nombre="Juan" apellido="Nuñez" alertar={alertarFn}>
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
    </div>
  );
}

export default App;
