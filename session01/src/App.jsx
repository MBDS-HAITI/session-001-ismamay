import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './data/Index.css';

import data from './data/data.json';

import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';
import MenuContent from './components/MenuContent.jsx';



function App() {

    const [selected, setSelected] = useState("Notes");

    function getRandomItem(list) {
        const index = Math.floor(Math.random() * list.length);
        return list[index];
    }

    const randomStudent = getRandomItem(data);

    return (
        <>
         
            <Menu selected={selected} onSelect={setSelected} />

            <MenuContent selected={selected} data={data} />            

            <Footer />
        </>
    );
}



export default App
