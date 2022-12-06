import NavBar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import "./Portfolio-page.css"

import functional_trainer from "../images/functional-trainer-sketch.jpg";
import main_body from "../images/IMG_3150.jpg"
import attachments from "../images/functional-trainer-attachments.png"

function Personas(){

  return (
    <div className="wrapper">
      <NavBar/>
      <div className="portfolio-page">
      <section>
      <div className="titles">
        <div>
          <div>
            <h1>How to use a <span className="text-warning"> FUNCTIONAL TRAINER</span></h1>
            <h2>Examining functional trainers as an interface with personas and storyboards</h2>
          </div>
        </div>
      </div>
    </section>

    <section id="introduction">
        <p className="introduction">
          If you are a fitness newbie and go to the gym for your very first workout session, it is very likely
          that you are immediately overwhelmed at the first glance of the miscellany of wierdly-shaped pieces of
          machinery. The gym is filled with loud music, the smell of sweats, and muscular men and build women playing
          with these equipments like a violin. You, on the other hand, are cluelessly standing in the midst of all of this mess.
          Which ones should you go to? How do you know which ones are more advanced than the others? How do you know which equipments are for which
          parts of your body?... 
          This project delves into the design of a FUNCTIONAl TRAINER, a common type of equipment in the gym. How does it work?
          Is it intuitive to learn? How does it compare to other training facilities of similar purposes? Is it safe to use?
        </p>
    </section>

    <section id="trainer" class="p-5">
      <div>
        <h2 class="text-center">What is a FUNCTIONAL TRAINER?</h2>
      </div>
      <div class="container">
        <p>
          A functional trainer is a versatile piece of gym equipment that people use for functional training, i.e., working out specific parts 
          of their muscles. 
        </p>
        <p>
          There are various forms of functional trainers, and this project focuses on the wall-mounted types that are present in the 
          Nelson fitness center of Brown University. However different two functional trainers might seem, their essential composition 
          remain consistent: main body and attachments. 
        </p>
        <img src={functional_trainer} class="img-fluid" alt="" />
      </div>
      <div class="container">
          <div>
          <div class="card-body">
              <h3 class="card-title mb-3 text-center"><u>Main Body</u></h3>
                  <p class="card-text">
                    The main body of a functional trainer consists of the following:
                  </p>
                  <ul>
                    <li>A <b>verticle pole</b> mounted on the wall and/or ground that has slots at different heights for the pulley.</li>
                    <li>An <b>adjustable pulley</b>: 
                      <ul>
                        <li>The pulley can be fixed in one of the slots on the pole with the bolt. The bolt can be pulled
                          against the pole so that the user can slide the pulley up or down. As the pulley is repositioned to a desired height, the user 
                          lets go of the bolt so that the bolt goes into the new slot.</li> 
                        <li> The cable mounted on the pulley connects to a hook, where mounts the attachments.</li>  
                      </ul>
                    </li>
                    <li>A <b>resistance-setting device</b>. The user is free to adjust how 
                      much resistance they would like on the other side of the cable to pull against.
                      In the above functional trainer, there are two yellow buttons on the wall to set the resistance up and down. 
                      A display shows the current resistance. 
                    </li>
                  </ul>
                </div>
            <div class="img-container">
              <img src={main_body} class="img-fluid" alt="" width="500" height="600"/>
            </div>
          </div>
          <div class="row align-items-center justify-content-between">
          <div class="card-body">
            <h3 class="card-title mb-3 text-center"><u>Attachments</u></h3>
            <p class="card-text">
              The attachments are what the user grabs when they pull against the resistance. There are various types of attachments, each designed
              different motions and different parts of the human body.
            </p>
            <ul>
              <li>The <b>T-bar</b>: a T-shaped iron bar. The user holds onto the two ends with both hands.</li>
              <li>The <b>handle</b>: a short, plastic bar whose ends are attached by strips. The user holds onto the bar with one hand.</li>
              <li>The <b>rope</b>: a segment of thick rope with two semi-spheres attached at both ends. The user holds onto the ends of the rope with both hands which rest against the semi-spheres.
              The angle between the directions where the hands pull is flexible.</li>
              <li>The <b>ankle cuff</b>: to be cuffed on either of the ankles.</li>
            </ul>
          </div>
          <div class="img-container">
              <img src={attachments} class="img-fluid" alt="" width="500" height="600"/>
            </div>
          </div>
        </div>
    </section>
        
    <section class="p-5">
      <div class="container">
        <p>The essential way that the functional trainer works is the following:
          <b>The user pull with any of their limb from the attachment in any direction 
            against the designated resistance. </b>
        </p>
      </div>
    </section>
    
    <section id="research" class="p-5 bg-dark text-light">
      <h2>Researching users</h2>
      <div class="container">
        <p>
          From the description above, we can agree that the functional trainer is quite complex with multiple parts. 
          How, then, do different users interact with it? 
          In this study of the functional trainer, I have raised the following questions for users. To investigate into 
          this question, we want to consider a diversity of users coming from different background.
          I observed and interviewed three people who are respectively a first-time user (A), a casual gym-goer (B), and a frequent user (C).
        </p>
      </div>
      <div class="container">
        
        <div class="container">
          <h3 class="text-warning">Key Observations:</h3>
          <div>
            <ul>
              <li>First-time users prefer to consult a professional source like a coach on how they should use the functional trainer, considering not only 
                the complexity of the equipment but also their need to customize the facility according to specific training goals.
              </li>
              <li>Once familiar with its function, users find the functional trainer a versatile and important training facility in the gym that they use
                on different parts of their body. The adjustable pulley and various attachments grant tremendous flexibility to the equipment.
              </li>
              <li>It is difficult to move the pulley when it gets up high on the pole, especially for people of shorter stature.</li>
              <li>All three users find the display confusing as it is unclear what the parameters mean and what units are used. The buttons to adjust the resistance
                are detached from the display board, making their purpose more ambiguous.
              </li>
              <li>The users specifically note that there is another type of functional trainer that uses a weight stack as the source of resistance (as shown in picture).
                They indicate that the weight stack serves as a strong visual cue for the purpose of the equipment. The weight stacks also has clear numerical values with units (lbs)
                labeled so they specifically know how much resistance they are working out against. </li>
            </ul>
            <img src="img/xmark-fitness-xm-7626-functional-trainer.webp" class="img-fluid" alt="" width="400" height="600"/>
          </div>
        </div>
      </div>
    </section>

    <section id="personas" class="p-5">
      <div class="container">
        <h2 class="text-center">Personas</h2>
        <p class="lead text-center">
          From the observations above, I have designed two personas -- Amanda and Cooper.
        </p>
        <div>
          <img src="img/Personas-and-storyboards-2.jpg" class="img-fluid" alt="" />
          <div class="card bg-warning">
              <div class="card-body">
              <p>
                Amanda is a female university student who has been regularly working out in the gym before, but she is unfamiliar with this new gym she is going to now
                since she moved to another location.
              </p>
              <ol>
                <li>The problems that Amanda faces are twofold. a) She has always been using functional trainers that use weight stacks as resistance, so she does not
                  know how to adjust resistance on this equipment. The confusing layout of the display and the detachment of the buttons from the display also adds to this problem.
                  b) it is difficult for her to slide the pulley to the top of the pole as she is not very tall.
                </li>
                <li>Amanda represents user A and B from the interview and observation as someone who is relatively new to the facility.</li>
              </ol>
              </div>
          </div>
        </div>
        <div>
          <img src="img/Personas-and-storyboards-3.jpg" class="img-fluid" alt="" />
          <div class="card bg-primary">
              <div class="card-body text-white">
              <p>
                Cooper is an athlete preparing for an upcoming shot put final.
              </p>
              <ol>
                <li>The problem that Cooper faces with the interface is the inability to pinpoint the exact amount of resistance for his professional training
                </li>
                <li>Cooper represents user C, who is a extreme, frequent user of the facility.</li>
              </ol>
              </div>
          </div>
          
        </div>
      </div>
    </section>

    <section id="storyboards" class="p-5 bg-dark text-light">
      <h2>Storyboard</h2>
      <div class="container">
        <img src="img/Personas-and-storyboards-4.jpg" class="img-fluid" alt="" />
        <img src="img/Personas-and-storyboards-5.jpg" class="img-fluid" alt="" />
        <img src="img/Personas-and-storyboards-6.jpg" class="img-fluid" alt="" />
      </div>
    </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Personas;