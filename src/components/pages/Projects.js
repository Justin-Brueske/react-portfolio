import React from 'react';
import quizimageImage from "../../assets/images/quizscreenshot.gif";
import weatherImage from "../../assets/images/openweather.gif";
import purrfectImage from "../../assets/images/purrfect-book.gif";
import readmeImage from "../../assets/images/readmegenerator.gif";
import teamImage from "../../assets/images/team-generator.gif";
import employeeImage from "../../assets/images/employee-tracker.gif";

export default function Blog() {
  return (
    <div>
      <h1>Projects</h1>
      <section class="projects container">
                    <a href="https://justin-brueske.github.io/quiz-time/"><img src={quizimageImage} alt="Quiz Time"/></a>
                    <div class="bottom-left">Quiz Time</div>
                </section>
                
                <section class="projects container">
                    <a href="https://justin-brueske.github.io/open-weather-dashboard/"><img src={weatherImage} alt="Weather"/></a>
                    <div class="bottom-left">Weather</div>
                </section>
                <section class="feature container">
                <a href="https://sotothemayor.github.io/recommendabook/"><img src={purrfectImage} alt="Purrfect Book"/></a>
                <div class="bottom-left">Purrfect Book</div>
            
            </section>
            <section class="feature container">
                <a href="https://github.com/Justin-Brueske/the-readme-generator"><img src={readmeImage} alt=""/></a>
                <div class="bottom-left">Readme Generator</div>
            
            </section>
            <section class="feature container">
                <a href="https://github.com/Justin-Brueske/team-generator"><img src={teamImage} alt=""/></a>
                <div class="bottom-left">Team Generator</div>
            
            </section>
            <section class="feature container">
                <a href="https://github.com/Justin-Brueske/employee-tracker"><img src={employeeImage} alt=""/></a>
                <div class="bottom-left">Employee Tracker</div>
            
            </section>
    </div>
  );
}
