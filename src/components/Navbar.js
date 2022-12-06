import '../Home.css';
import { useNavigate } from "react-router-dom";

export default function NavBar(){

  const navigate = useNavigate();

  function scrollRight() {

    if (document.getElementById("horizontal-wrapper") == null){
      navigate("/");
    }
    const outsider = document.getElementById("horizontal-wrapper");
    const distance = window.innerWidth;
    outsider.scrollBy({
      left: distance,
      behavior: 'smooth'
    });
  }

  return (
    <nav>
      <div className="nav-item-group" id="logo" onClick={()=>navigate("/")}>PENGUIN DUMBIE</div>
      <div className="nav-item-group">
        <div className="nav-item">Resume</div>
        <a href="#projects"><div className="nav-item">Works</div></a>
        <div className="nav-item" onClick={scrollRight}>About</div>
      </div>
    </nav>
  )
}