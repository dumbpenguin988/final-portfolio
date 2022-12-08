import '../Home.css';
// import { Link, useNavigate, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBar(){

  let menu_open = false;
  const handleMenuClick = () =>{
    if (!menu_open){
      document.getElementById("menu-unfolded").style.display = "flex";
      menu_open = true;
    }
    else {
      document.getElementById("menu-unfolded").style.display = "none";
      menu_open = false;
    }
  }

  return (
    <nav>
      <HashLink to="/#welcome"><div className="nav-item-group" id="logo">PENGUIN DUMBIE</div></HashLink>
      <div className="nav-item-group" id="menu">
        <div className="nav-item">Resume</div>
        <HashLink to="/#projects"><div className="nav-item">Works</div></HashLink>
        <HashLink to="/#about" scroll={el => el.scrollIntoView({ behavior: 'smooth'})}><div className="nav-item">About</div></HashLink>
      </div>
      <div className="nav-items-folded">
          <FontAwesomeIcon icon={faBars} onClick={handleMenuClick}/>
          <div className="menu-unfolded" id="menu-unfolded">
              <div className="nav-item">Resume</div>
              <HashLink to="/#projects"><div className="nav-item">Works</div></HashLink>
              <HashLink to="/#about" scroll={el => el.scrollIntoView({ behavior: 'smooth'})}><div className="nav-item">About</div></HashLink>
            </div>
          </div>
    </nav>
  )
}