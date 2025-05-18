import logo from "./../assets/images/7938741.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav-bar">
      <img className="image-logo" src={logo} />
      <p className="titulo">COMPANY TAGLINE</p>
    </nav>
  );
}

export default Navbar;
