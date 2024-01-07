import React from 'react';
import './AboutMe.css';
import myPortrait from './assets/yahie.jpg'; // replace with the path to your portrait
import myCV from './assets/YahieAliCV.pdf';
function AboutMeCard() {
  return (
    <div className="card">
      <img src={myPortrait} alt="Portrait" className="portrait" />
      <div className="text">
        <h2>About Me</h2>
        <p className='content'>My name is Yahie and i am a software engineer. I work mainly on the backend, but also have extensive knowledge on web Technologies. </p>
        
        <a href={myCV} download="YahieAliCV.pdf" className="button">Download Resume</a> 
                     </div>
    </div>
  );
}

export default AboutMeCard;