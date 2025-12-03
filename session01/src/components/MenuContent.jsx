import NotesTable from './NotesTable';
import StudentsTable from './StudentsTable';
import CoursesTable from './CoursesTable';

function MenuContent({ selected, data }) {
    if (selected === "Notes") return <div className="fade-in">  <NotesTable data={data} /></div>;
    if (selected === "Etudiants") return <div className="fade-in"> <StudentsTable data={data} /> </div>;
    if (selected === "Matieres") return <CoursesTable data={data} />;

    return <p className="fade-in" style={{ textAlign: "center", marginTop: "100px" }}>Ce projet est realise par Ismael Romelus, Decembre 2025 !!!</p>;

}
export default MenuContent;