import '../Home.css';
import penguin_logo from "../images/penguin-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default function Footer(){

  return (
    <section className="footer">
        <div className="bye">
          <img src={penguin_logo} alt="penguin-logo"></img>
          <div>
            <h1>Hey!</h1>
            <h2>Shoot me a message!</h2>
          </div>
          
        </div>

        <div className="footer-contact">
              <FontAwesomeIcon className="social-icon" icon={faGithub} />
              <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
              <FontAwesomeIcon className="social-icon" icon={faInstagram} />
              <FontAwesomeIcon className="social-icon" icon={faEnvelope} />
        </div>

        <div>
          built by dumbpenguin988
        </div>
      </section>
  )

}
