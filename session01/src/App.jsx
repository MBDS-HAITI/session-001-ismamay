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
    return (
        <main>
            <p>Ici, nous afficherons des informations interessantes :</p>
        </main>    
    );
}

function Footer() {
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
            Tous droits reserves -{firstName} {lastName} &copy; 2025
        </footer>
    );
}
function App() {
  const [count, setCount] = useState(0)

    return (
        <>        
            <Header />      
            <MainContent />
            <Footer />      
    </>
  )
}



export default App
