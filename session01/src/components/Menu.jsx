function Menu() {
    function handleClick(text) {
        alert(`Vous avez clique sur :${text}`);
    }


    const menuStyle = {
        position: "absolute",
        top: "20px",
        left: "20px",
        display: "flex",
        flexDirection: "row",
        gap: "10px",
    };
    const itemStyle = {
        color: "white",
        cursor: "pointer",
        fontSize: "1.1rem",
        fontWeight: "bold"
    };

    return (
        <nav style={menuStyle}>
            <span style={itemStyle} onClick={() => handleClick("Notes")}>Notes</span>
            <span style={itemStyle} onClick={() => handleClick("Etudiants")}>Etudiants</span>
            <span style={itemStyle} onClick={() => handleClick("Matieres")}>Matieres</span>
            <span style={itemStyle} onClick={() => handleClick("A propos")}>A propos</span>
        </nav>
    );
}

export default Menu;