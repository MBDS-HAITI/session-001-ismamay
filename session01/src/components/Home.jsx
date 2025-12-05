



import React from "react";
import "./Home.css";

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="hero">
                    <h1 className="hero-title">Best Education For Success</h1>

                    <p className="hero-subtitle">
                        Empowering students with knowledge, skills, and guidance to build a better future.
                    </p>

                    <button className="hero-button">
                        Explore Courses
                    </button>
                </div>
            </div>

        
            <section className="why-section">
                <h2>Pourquoi Nous Choisir ?</h2>
                <div className="why-grid">

                    <div className="why-card">
                        <span className="emoji"></span>
                        <h3>Excellence Académique</h3>
                        <p>Des programmes conçus pour développer des compétences solides.</p>
                    </div>

                    <div className="why-card">
                        <span className="emoji"></span>
                        <h3>Apprentissage Moderne</h3>
                        <p>Une plateforme intuitive, rapide et agréable à utiliser.</p>
                    </div>

                    <div className="why-card">
                        <span className="emoji"></span>
                        <h3>Boostez votre avenir</h3>
                        <p>Accédez à des cours qui ouvrent de vraies opportunités.</p>
                    </div>

                </div>
            </section>

      
            <section className="featured-section">
                <h2>Cours Populaires</h2>

                <div className="featured-grid">
                    <div className="course-card">
                        <h3>Algorithmique</h3>
                        <p>Apprenez à résoudre des problèmes complexes étape par étape.</p>
                    </div>

                    <div className="course-card">
                        <h3>Database Design</h3>
                        <p>Maîtrisez les bases de données relationnelles et NoSQL.</p>
                    </div>

                    <div className="course-card">
                        <h3>Programmation Web</h3>
                        <p>Développez des applications web modernes avec React & Node.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;

