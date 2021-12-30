import { Input, Row } from "reactstrap"

const Texto = (props) => {
    return (
        <>
            <Row className="mt-4">
                <Input type="text" value={props.text} onChange={e => props.setText(e.target.value)}></Input>
            </Row>
        </>
    )
}

export default Texto;