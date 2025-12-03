
import '../data/Index.css'; 


function Footer() {
    const year = new Date().getFullYear();
    const firstName = "Ismael";
    const lastName = "Romelus";
    return (
        <footer className="footer">
            &copy; {year} - {firstName} {lastName}, Tous droits reserves
        </footer>
    );

}
export default Footer;