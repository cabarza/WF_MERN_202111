import { useEffect } from "react";
import { useParams } from "react-router";

const ViewTwo = (props) => {
    const {nombre} = useParams();

    useEffect(()=>{
        props.setTitulo('Vista Dos');
    }, [])

    return (
        <>
            <h1> Vista 2 {nombre}</h1> 
        </>
    )
}

export default ViewTwo;