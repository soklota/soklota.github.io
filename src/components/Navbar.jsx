// Navbar.jsx
import '../css/Navbar.css';
import MyResume from '../assets/Oklota_Sydney_Resume.pdf';

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar__logo">SO</span>
      <ul className="navbar__links">
        <li><a href="#about">\bio</a></li>
        <li><a href="#projects">\projects</a></li>
        <li><a href="#contact">\contact</a></li>
        <li><a href={MyResume} target="resume">\resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;