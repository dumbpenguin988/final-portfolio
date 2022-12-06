import NavBar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import "./Portfolio-page.css"
import problems1 from "../images/ynoodle-problems-annotated001.jpeg";
import problems2 from "../images/ynoodle-problems-annotated002.jpeg";
import problems3 from "../images/ynoodle-problems-annotated003.jpeg";
import problems4 from "../images/ynoodle-problems-annotated004.jpeg";
import webaim from "../images/webaim.png";
import lofi1 from "../images/lofi1.png"
import lofi2 from "../images/lofi2.png"
import guide from "../images/guide.png"
import hifi1 from "../images/hifi.001.png"
import hifi2 from "../images/hifi.002.png"
import hifi3 from "../images/hifi.003.png"
import hifi4 from "../images/hifi.004.png"
import hifi5 from "../images/hifi.005.png"
import cover from "../images/cover.png"


function Redesign() {
  
  return (
    <div className="wrapper">
      <NavBar/>
      <div className="portfolio-page">
      <section>
        <div className="titles">
          <div>
            <div className="title-img">
              <img></img>
            </div>
            <div className="title-text">
              <h1>Remaking <span className="text-warning"> Y noodles</span></h1>
              <h3>
                Helping one of the best Asian restaruants in local Providence!
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="usability">
        <div>
          <h2> Identifying usability problems</h2>
        </div>
        <div>
          <p>
            Y Noodle & Bar is a local Asian restaurant in Providence that is best known for their homemade desserts. This project will examine the index page of 
            its official website <a href="https://ynoodlebar.com">(www.ynoodlebar.com)</a> for online ordering and displaying other important information of the restaurant. 
          </p>
          <p>
            I have identified the following problems that might affect the usability of the website and annotated them on the screenshots. I have also annotated the website screenshots with specific comments.
          </p>
          <ul>
            <li><span className="text-warning">Poor visual design</span> that makes the restaurant unattractive and seem unprofessional: poor alignment, uninteresting background,
            misplacement of elements, inappropriate porportions.</li>
            <li><span className="text-warning">Poor affordance and lack of visual cues</span> that makes the website hard to navigate especially for first-time users.</li>
            <li><span className="text-warning">Poor responsiveness</span> that makes the website even harder to use on mobile devices.</li>
          </ul>
          <div className="img-container">
            <img src={problems1} className="img-fluid" alt="" />
            <img src={problems2} className="img-fluid" alt="" />
            <img src={problems3} className="img-fluid" alt="" />
            <img src={problems4} className="img-fluid" alt="" />
          </div>
          <p>
            WebAim primarily identifies that "Join Y Noodel & Bar" text in white has poor contrast against the background. I agree that this might also be an issue.
          </p>
          <div className="img-container">
            <img src={webaim} className="img-fluid" alt="" />
          </div>
          
        </div>
        
      </section>

      <section id="lofi" >
        <div>
          <h2 className="text-center">Low-fidelity design</h2>
          <p className="lead text-center">
            From the observations above, I have made the following low-fidelity design.
          </p>
          <div className="img-container">
            <img src={lofi1} className="img-fluid" alt="" />
            <img src={lofi2} className="img-fluid" alt="" />
          </div>
        </div>
      </section>

      <section id="hifi">
        <h2>Hi-fidelity design</h2>
        <p className="lead text-center">
          I have made the following hifi design for the y noodle and bar website.
          You may note that 
          the high-fidelity design is a little bit different from lofi on sizes -- yes, I changed my mind during 
          the process of designing and thought that a full-screen home page could be pretty cool!
          In the annotations, I have specifically highlighted elements that require complex alignment or care on responsiveness across different devices.
        </p>
        <div className="img-container">
          <img src={guide} className="img-fluid" alt="" />
          <img src={hifi1} className="img-fluid" alt="" />
          <img src={hifi2} className="img-fluid" alt="" />
          <img src={hifi3} className="img-fluid" alt="" />
          <img src={hifi4} className="img-fluid" alt="" />
          <img src={hifi5} className="img-fluid" alt="" />
        </div>
      </section>

      <section id="redesigned" className="p-5 bg-dark text-light">
        <div>
          <h2>Final Design</h2>
          <h3 className="lead text-center">
            Click on the picture below to see my final redesign of the Y Noodle and Bar website!
          </h3>
            <a href="https://dumbpenguin988.github.io/redesigned-ynoodlebar/">
            <div className="img-container">
              <img src={cover} className="img-fluid" alt="" />
            </div>
            </a>
        </div>
      </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Redesign;