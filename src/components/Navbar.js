import '../Home.css';
// import { Link, useNavigate, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function NavBar(){

  return (
    <nav>
      <HashLink to="/#welcome"><div className="nav-item-group" id="logo">PENGUIN DUMBIE</div></HashLink>
      <div className="nav-item-group">
        <div className="nav-item">Resume</div>
        <HashLink to="/#projects"><div className="nav-item">Works</div></HashLink>
        <HashLink to="/#about" scroll={el => el.scrollIntoView({ behavior: 'smooth'})}><div className="nav-item">About</div></HashLink>
      </div>
    </nav>
  )
}