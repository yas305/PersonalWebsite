import React, { useState } from 'react';
import '../styles/BottomNav.css';

const BottomNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log("pressed");
  };

  const navLinks = [
    { title: "My CV", url:"/cv",imageUrl: "https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "My YouTube Channel", url:"https://www.youtube.com/channel/UC5Ei028wCuFj0uW3Dr7G2tg", imageUrl: "https://images.unsplash.com/photo-1616469829526-7057a1427626?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Work Experience", url:"/experiance",imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {title: "Github", url:"https://github.com/yas305/",imageUrl:"https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {title: "Linkedin", url:"https://www.linkedin.com/in/yahie-ali-134593141/",imageUrl:"https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
    // Add more links as needed
  ];

  return (
    <div>
      {isNavOpen && <div className="bottom-nav-backdrop" onClick={toggleNav}></div>}
      <nav className={`bottom-nav ${isNavOpen ? 'open' : ''}`}>
        <div className="nav-links-container">
          {navLinks.map((link, index) => (
            <div className="nav-card" key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <img className="nav-card-image" src={link.imageUrl} alt={link.title} />
              </a>
              <h2 className="nav-card-title">{link.title}</h2>
            </div>
          ))}
        </div>
      </nav>
      {!isNavOpen && (
      <button id="nav-toggle" type="button" onClick={toggleNav}>
        {/* Triangle button - content can be empty */}
      </button>
    )}
    </div>
  );
          }  

export default BottomNav;
