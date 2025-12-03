import logoMBDS from '../assets/mbds_logo_transparent.svg';
import logo from '../assets/logo.png';

function Header() {
    return (
        <header>
            <img src={logoMBDS} alt="Logo MBDS" width={150} />
            {/*<h1>Introduction a React</h1>*/}
            {/*<h2>A la decouverte des premieres notions de React </h2>*/}
        </header>
    );
}
export default Header;
