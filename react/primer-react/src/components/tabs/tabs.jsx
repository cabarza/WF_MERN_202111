import { useEffect, useState } from "react";
import Tab from "./tab";
import TabContent from "./tab-content";
import axios from 'axios';

const Tabs = () => {

    const [tabs, setTabs] = useState([]);
    const [tab, setTab] = useState({});
    const [counter, setCounter] = useState(0);
    const [url, setUrl] = useState('http://swapi.dev/api/people/');

    const showContent = (data) => {
        const newData = tabs.map(t => {
            t.selected = false;
            return t;
        });
        setTabs(newData);
        data.selected = true;
        setTab(data);
    } 

    useEffect(()=> {
        // setTabs([{ title: 'Tab 1', content: 'Este es el contenido del Tab 1', selected: false}, { title: 'Tab 2', content: 'Este es el contenido del Tab 2', selected: false}])
        // const int = setInterval(
        //     () => {
        //         const suma = counter + 1;
        //         setCounter(suma);
        //     }, 2000);

        // return function clearInt() {
        //     clearInterval(int);
        // }

        // fetch('http://swapi.dev/api/people/')
        //     .then(response => {
        //         console.log('RESPONSE 1', response);
        //         return response.json()
        //     })
        //     .then(response => {
        //         console.log('RESPONSE 2', response)
        //         const data = response.results.map(d => {
        //             return {
        //                 title: d.name, content: JSON.stringify(d)
        //             }
        //         })
        //         setTabs(data);
        //         // setPeople(response.results)
        //     }).catch(error => console.log(error));

        axios.get(url)
            .then(response => {
                console.log(response);
                const data = [...tabs, ...response.data.results.map(d => {
                    return {
                        title: d.name, content: JSON.stringify(d)
                    }
                })]
                setTabs(data);
                if(response.data.next) {
                    setUrl(response.data.next)
                }
            })
            .catch(error => console.log(error));
    }, [url])

    return (
        <>
            <h1>Contador: {counter}</h1>
            <div>
                { tabs.map((t, i) => <Tab key={i} data={t} tabClicked={showContent}/>)}
            </div>
            <div>
                <TabContent data={tab}/>
            </div>
        </>
    );

}

export default Tabs;