import NotesTable from './NotesTable';
import StudentsTable from './StudentsTable';
import CoursesTable from './CoursesTable';

function MenuContent({ selected, data }) {
    if (selected === "Notes") return <NotesTable data={data} />;
    if (selected === "Etudiants") return <StudentsTable data={data} />;
    if (selected === "Matieres") return <CoursesTable data={data} />;
    
    return <p style={{ textAlign: "center", marginTop: "100px" }}>Petite application developee dans le cadre de mon cours sur React JS</p>;

}
export default MenuContent;