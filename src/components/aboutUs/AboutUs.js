import React from 'react';
import './aboutUs.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Grid} from '@material-ui/core';
import { useHistory } from 'react-router';


export default function AboutUs() {
 
  const history = useHistory();

  const goToLogin= (event) => {
    event.preventDefault();
    history.push('/');
}


return (
  <div>  
    <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    }}>
    <ArrowBackIcon className='ArrowBack_icon link' onClick={goToLogin}/>
      <span className='ArrowBack_icon'>Return to Login</span>
      </div>     
      <br></br>
      <div id="about_section">
        <h1><em>Our Vision</em></h1>
        <h3>ChatterBox was born out of the desire to create a better chat app. We wanted a fun and easy 
        outlet to speak with our friends. We checked out the competition but nothing was up to snuff, 
        after some long nights and great collaboration ChatterBox was born! Chatter on mates! 
        </h3>
      </div>
      {/* style="text-align:center" */}
    <h1>Our Team</h1>
    <div class="row">  
      <div class="column">
        <div class="card">
          <div class="container">
            <h2>Tatiana DeAngelo, </h2>
              <p class="title">Co-Founder</p>
              <img src="Tatiana.jpg" alt="Tatiana DeAngelo" width="250" height="225"/>
              <p>Tatiana DeAngelo, Bachelor's of Science Degree in Engineering, 
                  minor in Mathematics with magna cum laude honors from Delaware State University.
                  Former High School Math teacher for 4 years, taught subjects including: Calculus, 
                  Statistics, and Algebra II. Currently working on rotating teams of 5 for projects 
                  such as a casino, uttilizing knowledge of Core Java, OOP, TDD, and Agile methodologies 
                  to create working applications. Languages: Java, TypeScript, JavaScript Frameworks: 
                  Spring Boot, Hibernate, Angular, Ionic, Apache Spark and React.</p>
            </div> 
          <a className = "linkedIn" href="https://www.linkedin.com/in/tatiana-deangelo/"> Connect With Me</a>          
        </div>
      </div>
      <br></br>
    
      <div class="column">
        <div class="card">
          <div class="container">
            <h2>Zachary Kitto</h2>
            <p class="title">Co-Founder</p>
            <img src="Zachary Kitto.jpg" alt="Zachary Kitto" width="250" height="225"/>
            <p>Zach is a former estimator for a mechanical insulation contractor. Produced accurate estimates 
              within tight deadlines by utilizing historical data. Worked on a team of five to create 
              a simulation of a farmer’s work week using abstraction and inheritance to ensure DRY code. 
              Personally created the farm package using core java fundamentals and implementing builder 
              and singleton design patterns. Familiar with Java, SQL, Spring Boot, 
              and Agile methodologies.</p>
            <a href="https://www.linkedin.com/in/zachkitto/"> Checkout my LinkedIn! </a>
          </div>
        </div>
      </div>
      <br></br>

    <div class="column">
      <div class="card">
        <div class="container">
          <h2>Jeremy Sabina</h2>
          <p class="title">Co-Founder</p>
        <img src="Jeremy .jpg" alt="Jeremy Sabina" width="250" height="225"/>
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
    <br></br>

    <div class="column">
      <div class="card">
        <div class="container">
          <h2>Laura Bedolla Soria</h2>
          <p class="title">Co-Founder</p>
        <img src="lauraBS.jpg" alt="Laura Bedolla Soria" width="250" height="225"/>
          <p>Laura has had coursework from Delaware Tech for Health Sciences
            (completed 25 course hours). Worked two years in customer service. 
            Obtained the highest number of sales on my location. Using my 
            bilingual abilities(Spanish), I helped customers that are part of 
            the hispanic community to understand and take full advantage of 
            their devices. Started teaching myself Java and JavaScript before 
            enrolling into the Zip Code bootcamp. Achieved over 1000 hours of 
            software development projects and training. Worked on several 
            projects using Java; object-oriented programming;  Spring Boot,
             and MySQL. Currently working in a team to build a message 
             application using React.</p>
          <a href="https://www.linkedin.com/in/laura-bedolla-soria/"> Checkout my LinkedIn! </a>
          <br></br>
        </div>
      </div>
    </div>
    </div>
  </div>
  
);
}