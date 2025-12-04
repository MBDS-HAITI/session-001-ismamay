import NotesTable from "./NotesTable";
import StudentsTable from "./StudentsTable";
import CoursesTable from "./CoursesTable";

function MenuContent({ selected, grades, students, courses }) {

    if (selected === "Notes") {
        return <NotesTable data={grades} />;
    }

    if (selected === "Etudiants") {
        return <StudentsTable data={students} />;
    }

    if (selected === "Matieres") {
        return <CoursesTable data={courses} />;
    }

    return <div style={{ padding: "20px" }}>Application en construction</div>;
}

export default MenuContent;
