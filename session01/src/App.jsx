import { useEffect, useState } from 'react';
import './App.css';
import './data/Index.css';

import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';
import MenuContent from './components/MenuContent.jsx';
import Navigation from './components/Navigation.jsx';
import { Routes, Route } from "react-router-dom";
import{ Link } from 'react-router-dom';

function App() {

   
    const [selected, setSelected] = useState("Notes");

    const [gradesData, setGradesData] = useState([]);
    const [studentsData, setStudentsData] = useState([]);
    const [coursesData, setCoursesData] = useState([]);


    useEffect(() => {
    
        fetch("http://localhost:8010/api/students/")
            .then((response) => response.json())
            .then((json) => setStudentsData(json));
    
        fetch("http://localhost:8010/api/grades/")
            .then((response) => response.json())
            .then((json) => setGradesData(json));
   
        fetch("http://localhost:8010/api/courses/")
            .then((response) => response.json())
            .then((json) => setCoursesData(json));
    }, []);

    return (
        <>
            <Navigation
                coursesData={coursesData}
                studentsData={studentsData}
                gradesData={gradesData}
            />
                            
            <Footer />
        </>
    );
}

export default App;

