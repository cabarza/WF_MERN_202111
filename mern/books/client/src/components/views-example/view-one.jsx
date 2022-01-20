import { useEffect } from "react";

const ViewOne = (props) => {


    useEffect(()=>{
        props.setTitulo('Vista Uno');
    }, [])

    return (
        <>
            <h1>Vista 1</h1>
        </>
    )
}

export default ViewOne;