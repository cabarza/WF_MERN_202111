const Tab = ({data, tabClicked}) => {

    return (
        <div style={{display: 'inline-block', border: '1px solid black', backgroundColor: data.selected?'red':'white'}} onClick={e => tabClicked(data)}>
            <h1>{data.title}</h1>
        </div>
    );
}

export default Tab;