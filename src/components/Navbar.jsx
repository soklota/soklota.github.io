// Navbar.jsx
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar__logo">✿   Sydney Oklota   ✿</span>
      <ul className="navbar__links">
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">My Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;