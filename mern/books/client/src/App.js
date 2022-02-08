import { BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './components/home/home';
import io from 'socket.io-client';
import { useEffect, useState } from "react";
import SocketContext from "./context/socket-context";
import Login from './components/home/login';


function App() {

  const [socket] = useState(io.connect("/"));
  const [login, setLogin] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    if(sessionStorage.getItem('USUARIO')) {
      setLogin(true);
      setUsuario(JSON.parse(sessionStorage.getItem('USUARIO')));
    }else {
      setUsuario({})
    }
    setLoaded(true);
  }, []);

  return (
    <SocketContext.Provider value={{socket: socket, login: login, setLogin: setLogin, usuario: usuario, setUsuario: setUsuario}}>
      <BrowserRouter>
        { login && loaded && <Home />}
        { !login && loaded && <Login setLogin={setLogin} />}
      </BrowserRouter>
    </SocketContext.Provider>
  );
}

export default App;
