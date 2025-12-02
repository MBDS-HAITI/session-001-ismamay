import React from 'react';

function StudentCard({ item }) {
    return (
        <div style={{
            background: "#222",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "10px",
            color: "white",
            width: "400px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "left"
        }}>
            <h3>{item.course}</h3>
            <p><strong>Nom :</strong> {item.student.firstname} {item.student.lastname}</p>
            <p><strong>ID etudiant :</strong> {item.student.id}</p>
            <p><strong>Date :</strong> {item.date}</p>
            <p><strong>Note :</strong> {item.grade}</p>
        </div>
    );
}

export default StudentCard;