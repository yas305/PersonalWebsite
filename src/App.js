import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Terminal from './Terminal';
import AboutMe from './AboutMe';
import Physics from './Physics';
import WorkExperience from './WorkExperience';
import ContactForm from './ContactForm';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h4>Welcome to my personal website!</h4>
      </header>
      <section id="terminal">
        <Terminal />
      </section>
      <section id="about">
        <h1>About Me</h1>
        <AboutMe />
      </section>
      <section id="Work Experiance">
        <h1>Work Experiance</h1>
        <WorkExperience />
      </section>
      <section id="Physics">
        <h1>Tech I have used</h1>    
            <Physics />
      </section>
      <section id="contact">
        <h1>Contact Me</h1>
        <ContactForm />
      </section>
    </div>
  );
}

export default App;