import { useContext } from "react";
import MyContext from "../../contexts/my-context";

const TabContent = ({data}) => {

    const context = useContext(MyContext);

    return (
        <>
            <h2>{data.content}</h2>

            <h4>{context.antiguo}</h4>
            <h5>{context.nuevo}</h5>
        </>
    );
}

export default TabContent;