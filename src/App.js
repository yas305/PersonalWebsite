
import './App.css';
import Heading from './Components/Heading';
import Gallery from './Components/Gallery';
import { useEffect } from 'react';
import BottomNav from './Components/BottomNav';

function App() {

  useEffect(() => {
    const blob = document.getElementById("blob");


    window.onpointermove = event => { 
      const { clientX, clientY } = event;
      
      blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 3000, fill: "forwards" });
    }
    


  });

  
  return (
    <div className="App">
  <div id="blob"></div>
  
  <Heading/>
  <Gallery/>
<BottomNav/>

    </div>
    
    
  );
}

export default App;
