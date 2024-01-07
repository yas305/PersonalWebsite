import React from 'react';
import Console from 'react-console-emulator';

const Terminal = () => {
  const commands = {
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: function () {
        return `${Array.from(arguments).join(' ')}`;
      }
    },
    about:{
      description: 'About me',
fn: function(){
return `
Hi my name is Yahie, I am a software engineer interested in backend development.
In my spare time I like to play poker and pool. Im also a big fan of F1 and look cooking. I also make youtube videos about my projects and other things I find interesting.  
`
}
    },
    projects:{
      description: 'My projects',
      fn: function(){
        return `
        1. Art runner: A android app developed with kotlin using google maps api to track your runs and create route art (video on youtube).
        2. My website: This website was developed using react.
        3. Dinner time: A mobile app developed using Flutter and firebase. the aim of the app was to provide a platform for chefs and home cooks to host events and dinner parties in their homespace

        
        `}
    }
      
  
  };

  return (
<Console
  className="terminal"
  commands={commands}
  welcomeMessage={'Welcome to the terminal! type in "help" for a list of commands.'}
  promptLabel={'$'}
  autoFocus={true}
/>
  );
};

export default Terminal;