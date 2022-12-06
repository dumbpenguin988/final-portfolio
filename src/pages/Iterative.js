import NavBar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import "./Portfolio-page.css"

import sketches from "../images/sketches.png"
import lowfi from "../images/lowfi.png"
import highfi_1 from "../images/highfi_1.png"
import highfi_2 from "../images/highfi_2.png"
import hifi_3 from "../images/hifi_3.gif"


function Iterative(){
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
              <h1>Designing for <span className="text-warning"> Moonshot</span></h1>
              <h3>
              Creating an interface for Moonshot, a start up that empowers young athlete by connecting them with investors
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="introduction">
        <div>
          <h2>About Moonshot</h2>
        </div>
        <div>
          <p>
          Becoming a professional athlete is expensive and risky. Professional tennis players spend more than $100,000 annually. This is a real problem for those with underprivileged backgrounds.
          Moonshot is dedicated to creating a platform where investors (backers) can angle invest in young athletes to help them kickstart their career.
          </p>
          <p>
          How is Moonshot beneficial?
          </p>
          <ul>
            <li><span className="text-warning">For backers</span>:</li>
              <ul>
                <li>Backers back their favourite up-and-coming athlete by investing in their career.</li>
                <li>When athletes make it big, their backers will have secured the ultimate bragging rights, and the backers will make a nice return on their investment in the form of a cut (think ~5-10%) on the athletes' future earnings.</li>
                <li>Backers can also get special perks such as sitting courtside and joining training.</li>
              </ul>
            <li><span className="text-warning">For athletes</span>:</li>
            <ul>
              <li>Athletes get the money they need to continue their professional career.</li>
              <li>Athletes can also gain their loyal audience early on!</li>
            </ul>
          </ul>
          <p>
          If you are interested in knowing more about this startup, please check  
          <a href="https://www.ycombinator.com/companies/moonshot"> Moonshot's YCombinator page</a>. 
          Here, our design team choose to design a webpage interface because it can be accessed by most devices, 
          which is essential for any product at its early stage to adopt more users.
          </p>
        </div>
      </section>

      {/* <section id="skecthes">
        <div>
          <h2>Sketches</h2>
        </div>
        <p>Each of our design group draws a set of 3 frames for the Moonshot web platform, 
          covering different aspects of its functionalities, including searching, viewing, 
          and pledging for athletes. After comparing and contrasting within our group, we 
          pick a set of elements or pages (tagged in yellow) that will be used for low-fi 
          wireframe in the next section.</p>
      </section> */}
      <section id="lofi" >
        <div>
          <h2 className="text-center">Low-fidelity design</h2>
          <p className="lead text-center">
          Each of our design group draws a set of 3 frames for the Moonshot web platform, 
          covering different aspects of its functionalities, including searching, viewing, 
          and pledging for athletes. After comparing and contrasting within our group, we 
          pick a set of elements or pages (tagged in yellow) that will be used for low-fi 
          wireframe.
          </p>
          <div className="img-container">
            <img src={sketches} className="img-fluid" alt="" />
          </div>
        </div>
        <div>
          <p>Combining the ideas from sketches and designing some new layouts, our group obtain a low-fidelity wireframe.</p>
          <div className="img-container">
            <img src={lowfi} className="img-fluid" alt="" />
          </div>
        </div>
      </section>

      <section id="hifi">
        <h2>Hi-fidelity design</h2>
        <div>
          <p>
            Based on the low-fi wireframe, we create our initial high-fi prototype for mockup. We receive several 
            critiques for this version. See the image below for the prototype and feedback markups.
          </p>
          <div className="img-container">
            <img src={highfi_1} className="img-fluid" alt="" />
          </div>
        </div>
        <div>
          <p>
            To address these feedbacks, we build our second version of high-fi prototype.
          </p>
          <div className="img-container">
            <img src={highfi_2} className="img-fluid" alt="" />
          </div>
        </div>
        <div>
          <p>
            A sample interaction workflow is shown below:
          </p>
          <div className="img-container">
            <img src={hifi_3} className="img-fluid" alt="" />
          </div>
        </div>
      </section>

      <section id="redesigned">
        <div>
          <h2>User testing</h2>
          <div id="usertesting" class="w3-padding-top-64">
        <div class="w3-padding-large">
            <p class="w3-large">
                Our overarching goal for user testing is to explore how the interface helps investors search, explore, and invest in up-and-coming athletes.
            </p>
            <p class="w3-large">
                Test setup:
                </p><ul>
                    <li>Overall Task:
                        <ul>
                            <li>Search, view, and invest in an athlete using Moonshot platform.
                            </li>
                        </ul>
                    </li>
                    <li>Scenario:
                        <ul>
                            <li>You are an investor named Youssef. You are interested in supporting up-and-coming 
                                young athletes in achieving their dreams. Someone recommended you Moonshot as a 
                                platform to search for and support young athletes.
                            </li>
                        </ul>
                    </li>
                    <li>Task 1:
                        <ul>
                            <li>You are on the main page of Moonshot's website. First, to learn how the platform works, 
                                go check “How It Works” page. After that, go back to the main page.</li>  
                            <li>[5-point rating scale: Very difficult to Very easy]</li>
                        </ul>
                    </li>
                    <li>Task 2: 
                        <ul>
                            <li>Now you understand how Moonshot works. You want to search for some up-and-coming athletes 
                                from your hometown, North Carolina. To search “North Carolina", you can click on the search bar.</li>
                            <li>[5-point rating scale: Very difficult to Very easy]</li>
                        </ul>
                    </li>
                    <li>Task 3:
                        <ul>
                            <li>You are interested in the basketball player John Doe and want to learn more about him. Go to 
                                his profile page and read about his profile and recent updates.</li>
                            <li>[5-point rating scale: Very difficult to Very easy]</li>
                        </ul>
                    </li>
                    <li>Task 4:
                        <ul>
                            <li>You are very impressed by John Doe's achievements and dedication to basketball and want to support 
                                his career. Pledge $399 for John Doe. After that, go check out your new team.</li>
                            <li>[5-point rating scale: Very difficult to Very easy]</li>
                        </ul>
                    </li>
                    <li>Task 5:
                        <ul>
                            <li>Please talk about your feelings about the workflow (searching-viewing-pledging). Do you like the 
                                website? Is there anything that confuses you?</li>
                            <li>[Verbal response]</li>
                        </ul>
                    </li>
                </ul>
            <p></p>
            <p class="w3-large">
                User Feedbacks:
                </p><ul>
                    <li>We receive video feedback from three subjects:
                        <ul>
                            <li> 
                                <a href="https://app.usertesting.com/v/cf138d93-06a7-4377-8059-23d2011cf118?back=https%3A%2F%2Fapp.usertesting.com%2Fdashboard#!/notes&amp;shared_via=link" target="_blank">ChronicReader</a> 
                            </li>
                            <li> 
                                <a href="https://app.usertesting.com/v/3d51fe9c-0c0c-473c-b166-4bd8c2112ad0?encrypted_video_handle=cdb68c46-c3f5-4265-b595-fd8a802b92fb#!/notes&amp;shared_via=link" target="_blank">SerenityCloud</a> 
                            </li>
                            <li> 
                                <a href="https://app.usertesting.com/v/02fce900-836d-4d54-8b20-152655cc7870?encrypted_video_handle=ebef4f74-5481-4b91-be14-b2d03a537d52#!/notes&amp;shared_via=link" target="_blank">BoBo2016</a> 
                            </li>
                        </ul>
                    </li>
                    <li>To summarize: 
                        <ul>
                            <li>Overall, UserTesting results validate our assumption on user behavior and prove the interface's learnability and usability.</li>
                            <li>All three users successfully complete all the tasks with little confusion. They describe the interface as "professional", "kind of neat", and "intuitive". 
                                On a scale from 1 (very hard to use) to 5 (very easy to use), all three users rate us 5 on almost all subtasks.
                            </li>
                            <li>The first reported confusing design is on “How It Works” page where we use the Moonshoy logo as the button to go back to the main page. 
                                The second confusion happens when a user interacts with the search bar and is surprised by the fact that she could search by states. 
                                The last confusing feature is on the profile page where a user is unsure what does "my team" mean.
                            </li>
                        </ul>
                    </li>
                </ul>
            <p></p>
            <p class="w3-large">
                Potential Improvements:
                </p><ul>
                    <li>Some users might not know they can go back to main page by clicking on the logo. So we can add a back-to-home button on “How it works” page.
                    </li>
                    <li>Some users are confused about the meaning of “My team” on their profile page. We could add an info icon on the top right to explain those are the young athletes you have invested in.
                    </li>
                    <li>Some users are surprised they could search by location. We could add that hint in the search bar in gray words.
                    </li>
                </ul>
            <p></p>
        </div>
    </div>
        </div>
      </section>
      </div>
      <Footer/>
    </div>
    )
}


export default Iterative;