import { useState } from 'react';
import { Container } from 'reactstrap';
import Texto from './components/texto/texto';
import VerTexto from './components/texto/ver-texto';

function App() {

  const [texto, setTexto] = useState('Valor inicial');

  return (
    <Container>
      <Texto text={texto} setText={setTexto}/>
      <VerTexto valor={texto}/>
    </Container>    
  );
}

export default App;
