import NotesTable from './NotesTable';
import StudentsTable from './StudentsTable';
import CoursesTable from './CoursesTable';

function MenuContent({ selected, data }) {
    if (selected === "Notes") return <NotesTable data={data} />;
    if (selected === "Etudiants") return <StudentsTable data={data} />;
    if (selected === "Matieres") return <CoursesTable data={data} />;
    
    return <p style={{ textAlign: "center", marginTop: "100px" }}>Ce projet est realise par Ismael Romelus, Decembre 2025 !!!</p>;

}
export default MenuContent;