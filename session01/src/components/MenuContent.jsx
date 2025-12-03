

function MenuContent({ selected }) {
    return (
        <div style={{ textAlign: "center", marginTop: "150px" }}>
            {selected === "Notes" && <p>Voici la section des Notes</p>}
            {selected === "Etudiants" && <p>Liste des Etudiants</p>}
            {selected === "Matieres" && <p>Liste des Matieres</p>}
            {selected === "A propos" && <p>Application React realisee par le goat</p>}
        </div>
    );
}
export default MenuContent;