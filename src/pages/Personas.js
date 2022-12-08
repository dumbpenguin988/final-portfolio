import NavBar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import "./Portfolio-page.css"

import functional_trainer from "../images/functional-trainer-sketch.jpg";
import main_body from "../images/IMG_3150.jpg"
import attachments from "../images/functional-trainer-attachments.png"
import persona1 from "../images/Personas-and-storyboards-2.jpg"
import persona2 from "../images/Personas-and-storyboards-3.jpg"
import storyboard1 from "../images/Personas-and-storyboards-4.jpg"
import storyboard2 from "../images/Personas-and-storyboards-5.jpg"
import storyboard3 from "../images/Personas-and-storyboards-6.jpg"

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

    <section className="introduction" id="introduction">
        <p>
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
        <div className="img-container">
          <img src={functional_trainer} class="img-fluid" alt="" />
        </div>
      </div>
      <div class="container">
          <div>
          <div class="card-body">
              <h3 class="card-title mb-3 text-center"><u>Main Body</u></h3>
                  <p>
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
              <img src={main_body} class="img-fluid" alt="" width="500" id="main-body"/>
            </div>
          </div>
          <div class="row align-items-center justify-content-between">
          <div class="card-body">
            <h3 class="card-title mb-3 text-center"><u>Attachments</u></h3>
            <p>
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
              <img src={attachments} class="img-fluid" alt="" width="500" id="attachments"/>
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
          In this study of the functional trainer, I have raised the following questions for users. 
          I observed and interviewed three people who are respectively a first-time user (A), a casual gym-goer (B), and a frequent user (C).
        </p>
      </div>
      <div class="container">
        <ul>
          <li>Is the first time that you use the functional trainer? If not, how long have you been using it?</li>
          <ul>
            <li>A: Yes!</li>
            <li>B: has just started working out in the gym about 3 months and has used the functional trainer for ten-ish times.</li>
            <li>C: has been working out in the gym for more than 3 years and almost always uses the functional trainer.</li>
          </ul>
        </ul>
        <ul>
          <li>
              How does a first-time user navigate the functional trainer? What is their guess of its function at the first glance?
              Will they figure out how it works without any source of guidance? 
              </li>
          <ul>
            <li>
              A: First notices the yellow buttons with "+" and "-" signs, and starts pressing them, which awakens the display. Notices the pulley, pulls out the bolt, and slides the pulley up and down. Sees the instruction texts on the display, but is bugged by the length of it. Then sets the resistance down and pulls from the pulley holding the hook without any attachments.
            </li>
            <li>
              B & C: both indicates that they learned to use the equipment from a coach or from watching instruction videos on the internet.
            </li>
          </ul>
        </ul>
        <ul>
          <li>
              Which part of the body are they working out with the functional trainer? 
              Do they adjust the pulley/resistance? Which attachment do they use?
              What is the motion?
          </li>
          <ul>
            <li>
            B: is working out buttocks by back kicking with one leg at a time using the ankle cuff. Prior to starting, adjusts pulley down to the lowest level.
            </li>
            <li>
            C: is working out the triceps. Prepares the workout by sliding the pulley to around 3/4 height of the pole and attaching the handle to the hook. Stands facing the side with both feet immediately next to the bottom of the pole. Grabs the support of the display with the hand closer to the wall, and pulls from the handle with the other hands.
            </li>
          </ul>
        </ul>
        <ul>
          <li>
          Is there any difficulty that the users encounter learning to use the functional trainer or during their workout?
          </li>
          <ul>
            <li>
            A: feels that the display is unintuitive to read with no units for resistance and too much information written in small font and no visual insrtuctions.
            </li>
            <li>
            B: feels that the pulley is difficult to move. It takes a lot of effort to pull the bolt out away from the pole to avoid friction between the bolt and the pole and it is especially hard when the pulley gets up high.
            </li>
            <li>
            C: feels that it is sometimes difficult to find the attachments needed because they are scattered around in the gym.
            </li>
          </ul>
        </ul>
        <ul>
          <li>
          To work out this part of body, is there another piece of facility in the gym that serve the same purposes?
              Which one do they use more and why?
          </li>
          <ul>
            <li>
            B: also does various forms of squatting with dumbbells to work out buttocks, but uses the functional trainer more because the back-kicking with resistance is effective not only on the buttocks but also on the back of the legs. It also protects knees compared to doing squatting.
            </li>
            <li>
            C: also works out by doing weight-lifting, as frequently as using the functional trainer. Weight-lifting works out the entire upper body while functional trainer is better at targeting specific group of muscles. Comments that the functional trainer also has the advantage of being safe, as doing weight-lifting always entails the danger of dropping the heavy dumbbells.
            </li>
          </ul>
        </ul>
        
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
          </div>
        </div>
      </div>
    </section>

    <section id="personas" class="p-5">
      <div>
        <h2 class="text-center">Personas</h2>
        <p>
          From the observations above, I have designed two personas -- Amanda and Cooper.
        </p>
        <div>
          <div>
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
          <div className="img-container">
            <img src={persona1} class="img-fluid" alt="" />
          </div>
        </div>
        <div>
          <div>
              <div>
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
          <div className="img-container">
            <img src={persona2} class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section id="storyboards" class="p-5 bg-dark text-light">
      <h2>Storyboard</h2>
      <div class="img-container">
        <img src={storyboard1} class="img-fluid" alt="" />
        <img src={storyboard2} class="img-fluid" alt="" />
        <img src={storyboard3} class="img-fluid" alt="" />
      </div>
    </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Personas;