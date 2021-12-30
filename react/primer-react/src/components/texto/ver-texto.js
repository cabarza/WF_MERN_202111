import { Row } from "reactstrap";

const VerTexto = (props) => {
    return (
        <Row className="mt-4">
            <h1>{props.valor}</h1> 
        </Row>
    )
}

export default VerTexto;