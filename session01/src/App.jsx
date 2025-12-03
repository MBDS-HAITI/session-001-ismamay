import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './data/Index.css';

import data from './data/data.json';
import StudentCard from './components/Student.jsx';
import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';
import MenuContent from './components/MenuContent.jsx';
import MainContent from './components/MainContent.jsx';
import Header from './components/Header.jsx';


function getRandomItem(list) {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}



function App() {

    const [selectedItem, setSelectedItem] = useState("Notes");

    function getRandomItem(list) {
        const index = Math.floor(Math.random() * list.length);
        return list[index];
    }

    const randomStudent = getRandomItem(data);

    return (
        <div>
         
            <Menu selected={selectedItem} onSelect={setSelectedItem} />

            <MenuContent selected={selectedItem} />            

            <Footer />
        </div>
    );
}



export default App
