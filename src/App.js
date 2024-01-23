
import './App.css';
import Heading from './Components/Heading';
import Gallery from './Components/Gallery';
import { useEffect } from 'react';
import BottomNav from './Components/BottomNav';
import { BrowserRouter as Router} from 'react-router-dom';
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
    <Router>
    <div className="App">
      <div id="blob"></div>
      
   <Heading/>
      <Gallery />

      <BottomNav/>

    </div>
  </Router>

  );
}

export default App;
