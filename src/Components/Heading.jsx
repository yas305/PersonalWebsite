// Heading.js
import React, { useEffect } from 'react';
import '../styles/Heading.css';


function Heading() {
  
  useEffect(() => {
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const enhance = (id) => {
      const element = document.getElementById(id),
        text = element.innerText.split("");

      element.innerText = "";

      text.forEach((value, index) => {
        const outer = document.createElement("span");

        outer.className = "outer";

        const inner = document.createElement("span");

        inner.className = "inner";

        inner.style.animationDelay = `${rand(-5000, 0)}ms`;

        const letter = document.createElement("span");

        letter.className = "letter";

        letter.innerText = value;

        letter.style.animationDelay = `${index * 1000}ms`;

        inner.appendChild(letter);

        outer.appendChild(inner);

        element.appendChild(outer);
      });
    }

    enhance("channel-link");
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  

  return (
    <div className="line">
        <a
          id="channel-link"
          href="https://www.youtube.com/channel/UC5Ei028wCuFj0uW3Dr7G2tg"
          target="_blank"
          className="word fancy"
          rel="noopener noreferrer"
        >
          yahie's website
        </a>
    </div>
  );
}

export default Heading;
