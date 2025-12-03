import './Menu.css'; 


import './Menu.css';

function Menu({ selected, onSelect }) {

    const items = ["Notes", "Etudiants", "Matieres", "A propos"];

    return (
        <nav className="menu">
            {items.map((item, index) => (
                <span
                    key={index}
                    className={`menu-item ${selected === item ? "active" : ""}`}
                    onClick={() => onSelect(item)}
                >
                    {item}
                </span>
            ))}
        </nav>
    );
}

export default Menu;