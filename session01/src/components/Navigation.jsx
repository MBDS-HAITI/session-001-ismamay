import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import { Link } from 'react-router-dom';
import CoursesTable from './CoursesTable.jsx';
import NotesTable from './NotesTable.jsx';
import StudentsTable from './StudentsTable.jsx';
import CourseDetails from './CourseDetails.jsx';

function Navigation({ coursesData, studentsData, gradesData }) {
    return (
        <div style={{ textAlign: "center", marginTop: "20px", color:"white" }}>
            <nav style={{ marginBottom: "20px" , color:"white"}}>
                    <Link to="/" style={{ marginRight: "20px", color: "white" }}>Home</Link>
                <Link to="/CoursesTable" style={{ marginRight: "20px", color: "white" }}>Courses</Link>
                <Link to="/StudentsTable" style={{ marginRight: "20px", color: "white" }}>Students</Link>
                <Link to="/NotesTable" style={{ marginRight: "20px", color: "white" }}>Grades</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/CoursesTable" element={<CoursesTable data={coursesData} />} />
                <Route path="/StudentsTable" element={<StudentsTable data={studentsData} />} />
                <Route path="/NotesTable" element={<NotesTable data={gradesData} />} />
                <Route path="/courses/:id" element={<CourseDetails data={coursesData} />} />

            </Routes>
        </div>
    );

}
export default Navigation;