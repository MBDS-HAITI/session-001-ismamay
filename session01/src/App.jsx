import { useEffect, useState } from 'react';
import './App.css';
import './data/Index.css';

import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';
import MenuContent from './components/MenuContent.jsx';

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
            <Menu selected={selected} onSelect={setSelected} />         
            <MenuContent
                selected={selected}
                grades={gradesData}
                students={studentsData}
                courses={coursesData}
            />                       
            <Footer />
        </>
    );
}

export default App;

