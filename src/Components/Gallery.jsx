
import React, { useEffect } from 'react';
import '../styles/Gallery.css';
function Gallery() {

const image_urls=[
'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1642367340318-96fdbc5d30f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29sYW5nfGVufDB8fDB8fHww',
'https://images.unsplash.com/photo-1623522264952-8dff960ec8f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBva2VyfGVufDB8fDB8fHww',
'https://images.unsplash.com/photo-1530143584546-02191bc84eb5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://cdn.universitycompare.com/content/images/UniPostCover--University-of-Nottingham.jpg',
'https://images.unsplash.com/photo-1616469829526-7057a1427626?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];


const image_description=[
  "Welcome to my react website 👋, hover over the title and swipe thorugh the images to see my story",
  "My favourite programming language is Go 👩‍💻",
  "Im a Massive fan of poker 🃏",
  "My favourite sports is cycling 🚵",
  "I love to cook 👨‍🍳",
  "Im from london and have lived here most my life 😎",
  "I graduated from the University of Nottingham with a Bsc in computer Science 🧑‍🎓",
  "I also run a youtube channel 📽️"
]

const images = image_urls.map((url, index) => ({
  url: url,
  description: image_description[index]
}));

  useEffect(() => {

    const track = document.getElementById("image-track");

    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;
    
    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";  
      track.dataset.prevPercentage = track.dataset.percentage;
    }
    
    const handleOnMove = e => {
      if(track.dataset.mouseDownAt === "0") return;
      
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;
      
      const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
      
      track.dataset.percentage = nextPercentage;
      
      track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });
      
      for(const image of track.getElementsByClassName("image")) {
        image.animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
      }
    }
    
    
    
    window.onmousedown = e => handleOnDown(e);
    
    window.ontouchstart = e => handleOnDown(e.touches[0]);
    
    window.onmouseup = e => handleOnUp(e);
    
    window.ontouchend = e => handleOnUp(e.touches[0]);
    
    window.onmousemove = e => handleOnMove(e);
    
    window.ontouchmove = e => handleOnMove(e.touches[0]);



  });


  return (
  
    <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
      {images.map((image, index) => (
        <div className="image-container" key={index}>
          <img className="image" src={image.url} draggable="false" alt='' />
          <div className="overlay">
            {/* Display the image description */}
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </div>

  );
}

export default Gallery;
