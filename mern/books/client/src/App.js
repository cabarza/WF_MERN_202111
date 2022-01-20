import { BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './components/home/home';

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
