import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logoMBDS from './assets/mbds_logo_transparent.svg';
import logo from './assets/logo.png';



function Header() {
    return (
        <header>
            <img src={logoMBDS} alt="Logo MBDS" width={150} />
            <h1>Introduction a React</h1>         
            <h2>A la decouverte des premieres notions de React </h2>
        </header> 
    );
}

function MainContent() {
    const now = new Date();
    const day = new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(now);
    const month = new Intl.DateTimeFormat("fr-FR", { month: "long" }).format(now);
    const year = now.getFullYear();
    const time = new Intl.DateTimeFormat("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }).format(now);

    return (
        <main>
            <p>Bonjour, on est le {day} {now.getDate()}  {month} {year} et il est {time}</p>
        </main>    
    );
}

function Footer() {
   const year = new Date().getFullYear();
    const firstName = "Ismael";
    const lastName = "Romelus";
    return (
        <footer style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            color: "white",
            opacity: 0.7,
            fontSize: "1rem",
            width: "100%"
        }} >
            &copy; {year} - {firstName} {lastName}, Tous droits reserves 
        </footer>
    );
}
function App() {

    return (
        <>        
            <Header />      
            <MainContent />
            <Footer />      
    </>
  )
}



export default App
