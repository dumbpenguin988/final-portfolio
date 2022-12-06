import './Home.css';
import ProjectItem from "./components/ProjectItem.js"
import NavBar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
import projectData from "./asset/project-data.json";

import penguin_logo from "./images/penguin-logo.png"
import brown_logo from "./images/brown-logo.png"
import penguin_logo_about from "./images/penguin-logo-about.png"
import microsoft_logo from "./images/microsoft-logo.png"
import duolingo_logo from "./images/duolingo-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faAnglesDown, faAnglesRight, faAnglesLeft} from '@fortawesome/free-solid-svg-icons'



projectData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function Home() {

  function scrollLeft() {
    const outsider = document.getElementById("horizontal-wrapper");
    const distance = window.innerWidth;
    outsider.scrollBy({
      left: -distance,
      behavior: 'smooth'
    });
  }

  function scrollRight() {
    const outsider = document.getElementById("horizontal-wrapper");
    const distance = window.innerWidth;
    outsider.scrollBy({
      left: distance,
      behavior: 'smooth'
    });
  }

  return (
      <div className="Home">
      <section className='welcome'>
        <NavBar></NavBar>
        <div className='horizontal-wrapper' id="horizontal-wrapper">
          <div className='card'>
            <div className="card-logo">
              <img src={penguin_logo} alt="penguin logo"></img>
            </div>
            <div className='card-text'>
              <h1>Hey! </h1>
              <div className="view-about">
                <h2>This is <span id="logo">PENGUIN DUMBIE</span></h2>
                <div className='view-projects' onClick={scrollRight}>
                  <p className="read-more">READ MORE ABOUT ME! <FontAwesomeIcon icon={faAnglesRight}/> </p>
                </div>
              </div>
              
              <div className='descriptions'>
                <div className='description-item'><h3>24' CS <span className='highlight'>@Brown</span></h3><img src={brown_logo} className="logos" alt=""></img></div>
                <div className='description-item'><h3><span className='highlight2'> || </span>prev SWE <span className='highlight'>@Microsoft</span></h3><img src={microsoft_logo} className="logos" alt=""></img></div>
                <div className='description-item'>
                  <h3><span className='highlight2'> || </span>incoming SWE <span className='highlight'>@Duolingo</span></h3> <img src={duolingo_logo} className="logos" alt=""></img>
                </div>
              </div>
              <div className="card-contact">
                <FontAwesomeIcon className="social-icon" icon={faGithub} />
                <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
                <FontAwesomeIcon className="social-icon" icon={faInstagram} />
                <FontAwesomeIcon className="social-icon" icon={faEnvelope} />
              </div>
            </div>
          </div>
          <div className='card' id="about">
            <div className="view-projects" onClick={scrollLeft}>
              <p><FontAwesomeIcon icon={faAnglesLeft}/></p>
            </div>
            <div className='card-logo'>
              <img src={penguin_logo_about} alt="penguin logo"></img>
            </div>
            <div className='card-text'>
              <h2><span id="logo">PENGUIN DUMBIE</span></h2>
              <p>I am a junior student studying Computer Science and Music at Brown University, a former software engineer intern at Microsoft, and an incoming software engineer intern at Duolingo. 
                Obssessed with making positive impact for people around me, I am passionate about developing robust technology as creative solutions to various challenges.
                Also as a music composer who loves telling stories with notes, I am a fervent believer in enpowering people with technology to make their stories heard.</p>
              <p>
                Outside of technology, I am also a composer who have scored for 10+ films, written songs for musicals, and many concert compositions. 
                I love journaling and blogging, and a nooby who just got into photography.
              </p>
            </div>
          </div>
        </div>
        
        <div className="view-projects">
          <a href="#projects">
            <p><FontAwesomeIcon icon={faAnglesDown}/> VIEW MY WORKS!</p>
          </a>
        </div>
      </section>

      <section className="projects" id="projects">
        {
          projectData.map((item) => 
            <ProjectItem image={item.image} title={item.title} description={item.description} tags={item.tags} url={item.url}/>)
        }
      </section>
      <Footer></Footer>
    </div>    
  );
}

export default Home;
