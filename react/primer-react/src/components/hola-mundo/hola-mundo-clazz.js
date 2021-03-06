import { Component } from "react";

class HolaMundo2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contador: 1
        }
    }
   
    clickFn(e) {
        this.props.alertar();
        this.setState({
            contador: this.state.contador + 1
        })
    }

    aumentarContador(e) {
        this.props.setContadorPadre(this.props.contadorPadre + 1);
    }

    render() {
        const {apellido} = this.props;
        return <>
            <h2>Esta es una clase!!! {this.props.nombre} {apellido}  { this.state.contador }</h2>
            {this.props.alertar && <button onClick={e => this.clickFn(e)}>Click Me!!!</button>}
            {
                this.props.children
            }
            <button onClick={e => this.aumentarContador(e)}>Aumentar contador padre</button>
        </>
    }
}

export default HolaMundo2;