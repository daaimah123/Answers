import React, {useState} from 'react';
import ColorButton from './ColorButton';

const App = () => {

  // Create a state and setState with a default message value
  // state = message, setState=setMessage, defaultValue="Wake Up!"
  const [message, setMessage] = useState("Wake Up!")
  
  // Update this code with a new function named "updateMessage" that will take in a message (messageParam) parameter and update your setState by passing the same message (messageParam)
  const updateMessage = (messageParam) => {
    setMessage(messageParam);
  };

 return (
    <div>
      {/* Add a p tag with your default message state */}
      <p>{message}</p>
      {/* replace your onClick with your new function and set its value with the new function name */}
      <ColorButton color="blue" updateMessage={updateMessage}>
        Click Me!
      </ColorButton>
      <ColorButton color="green" updateMessage={updateMessage}>
        Another Button
      </ColorButton>
    </div>
 );
};

export default App;