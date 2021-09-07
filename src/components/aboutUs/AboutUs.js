import React from 'react';
import './aboutUs.css';
import Icon from '@material-ui/core/Icon';
import { Button, FormControl, InputLabel, Input, Link} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router';


export default function AboutUs() {
 
  const history = useHistory();

  const goToLogin= (event) => {
    event.preventDefault();
    history.push('/');
}


return (
  <div>  
    <div>
      <ArrowBackIcon className='ArrowBack_icon link' onClick={goToLogin}/>  
      <p>Return To Login</p>
    </div>
      <br></br>
      {/* <img src="ChatterBoxLogo.png" className="Logo" alt="ChatterBox Logo" width="192" height="160" />  */}

      <div class="about-section">
        <h1>About Us Page</h1>
        <p>ChatterBox was born out of the desire to create a better chat app. We wanted a fun and easy 
        outlet to speak with our friends. We checked out the competition but nothing was up to snuff, 
        after some long nights and great collaboration Chatter was born! 
        </p>
      </div>
      {/* style="text-align:center" */}
    <h2 >Our Team</h2>
    <div class="row">  
      <div class="column">
        <div class="card">
          <img src="Tatiana.jpg" alt="Tatiana DeAngelo" width="350" height="316"/>
          <div class="container">
            <h2>Tatiana DeAngelo</h2>
            <p class="title">Co-Founder</p>
            <p>Tatiana DeAngelo, Bachelor's of Science Degree in Engineering, 
                minor in Mathematics with magna cum laude honors from Delaware State University.
                Former High School Math teacher for 4 years, taught subjects including: Calculus, 
                Statistics, and Algebra II. Currently working on rotating teams of 5 for projects 
                such as a casino, uttilizing knowledge of Core Java, OOP, TDD, and Agile methodologies 
                to create working applications. Languages: Java, TypeScript, JavaScript Frameworks: 
                Spring Boot, Hibernate, Angular, Ionic, Apache Spark and React</p>
          <a href="https://www.linkedin.com/in/tatiana-deangelo/"> Checkout my LinkedIn! </a>          
          </div>
        </div>
      </div>
    
      <div class="column">
        <div class="card">
          <img src="Zachary Kitto.jpg" alt="Zachary Kitto" width="350" height="316"/>
          <div class="container">
            <h2>Zachary Kitto</h2>
            <p class="title">Co-Founder</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <a href="https://www.linkedin.com/in/zachkitto/"> Checkout my LinkedIn! </a>
          </div>
        </div>
      </div>

    <div class="column">
      <div class="card">
        <img src="Jeremy .jpg" alt="Jeremy Sabina" width="350" height="316"/>
        <div class="container">
          <h2>Jeremy Sabina</h2>
          <p class="title">Co-Founder</p>
          <p>Jeremy Sabina, Dual-Associates degrees in Culinary Arts and Baking and
              Pastry from the Culinary Institute of America. Experienced professional pastry 
              chef with extensive restaurant knowledge. Former sous chef at Evolution Craft 
              Brewery applied my ability to work under pressure while motivating and leading 
              crew to consistently exceed customer expectations. Worked with a team of 5 to 
              develop a functioning Casino application using Java while implementing over 80% 
              code coverage. Team utilized daily Agile and Scrum methodologies; personally 
              responsible for designing the console engine as well as extensions, interfaces 
              and methods on all card-based games. Proficient in Core Java, My SQL, Spring Boot,
              HTML, and React.</p>
          <a href="https://www.linkedin.com/in/jeremysabina/"> Checkout my LinkedIn! </a>
        </div>
      </div>
    </div>


    <div class="column">
      <div class="card">
        <img src="lauraBS.jpg" alt="Laura Bedolla Soria" width="350" height="316"/>
        <div class="container">
          <h2>Laura Bedolla Soria"</h2>
          <p class="title">Co-Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <a href="https://www.linkedin.com/in/laura-bedolla-soria/"> Checkout my LinkedIn! </a>
        </div>
      </div>
    </div>
    </div>
  </div>

);
}