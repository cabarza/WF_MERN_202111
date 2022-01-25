import { BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './components/home/home';
import io from 'socket.io-client';
import { useState } from "react";
import SocketContext from "./context/socket-context";

function App() {

  const [socket] = useState(io.connect("/"));


  return (
    <SocketContext.Provider value={socket}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </SocketContext.Provider>
  );
}

export default App;
