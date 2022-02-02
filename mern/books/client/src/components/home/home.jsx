import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import BookAdmin from "../books/admin";
import ViewOne from "../views-example/view-one";
import ViewTwo from "../views-example/view-two";
import Login from "./login";

const Home = () => {

    const [estado, setEstado] = useState('xyz');
    const [titulo, setTitulo] = useState('');
    const [login, setLogin] = useState(false);

    return (
        <>
            <div className="container">
                <nav>
                    <Link to="/view1">Vista 1</Link> &nbsp;
                    <Link to={`/view2/${estado}`}>Vista 2</Link> &nbsp;
                    <Link to="/books">Libros</Link>
                </nav>
                <h1>Bienvenidos {titulo}!</h1>
                <Routes>
                    <Route path="/books/*" element={<BookAdmin setTitulo={setTitulo}/>} />
                    <Route path="/view1" element={<ViewOne setTitulo={setTitulo}/>} />
                    <Route path="/view2/:nombre" element={<ViewTwo setTitulo={setTitulo}/>} />
                </Routes>
                { !login && <Login setLogin={setLogin} />}

                

                
            </div>
        </>
    )
}

export default Home;