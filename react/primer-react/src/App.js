import { useState } from 'react';
import { Container } from 'reactstrap';
import Tabs from './components/tabs/tabs';
import MyContext from './contexts/my-context';


function App() {

  const [mensaje, setMensaje] = useState('Este es el nuevo mensaje');

  return (
    <MyContext.Provider value={{antiguo:"Este es el valor de mi contexto", nuevo:mensaje}}>
      <Container>
        <Tabs/>
      </Container> 
    </MyContext.Provider>
  );
}

export default App;
