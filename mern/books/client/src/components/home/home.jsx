import { useContext, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import SocketContext from "../../context/socket-context";
import BookAdmin from "../books/admin";
import ViewOne from "../views-example/view-one";
import ViewTwo from "../views-example/view-two";

const Home = () => {

    const {login, setLogin, usuario} = useContext(SocketContext);

    const navigate = useNavigate();

    const [estado, setEstado] = useState('xyz');
    const [titulo, setTitulo] = useState('');
    

    return (
        <>
            <div className="container">
                <nav>
                    { usuario.name } &nbsp;
                    <Link to="/view1">Vista 1</Link> &nbsp;
                    <Link to={`/view2/${estado}`}>Vista 2</Link> &nbsp;
                    <Link to="/books">Libros</Link> &nbsp;
                    <a className="active" style={{cursor:'pointer'}} onClick={e => {
                        sessionStorage.removeItem('USUARIO');
                        setLogin(false);
                        navigate('/')
                    }}>Salir</a>
                </nav>
                <h1>Bienvenidos {titulo}!</h1>
                <Routes>
                    {login && <Route path="/books/*" element={<BookAdmin setTitulo={setTitulo}/>} /> }
                    <Route path="/view1" element={<ViewOne setTitulo={setTitulo}/>} />
                    <Route path="/view2/:nombre" element={<ViewTwo setTitulo={setTitulo}/>} />
                </Routes>

                

                
            </div>
        </>
    )
}

export default Home;