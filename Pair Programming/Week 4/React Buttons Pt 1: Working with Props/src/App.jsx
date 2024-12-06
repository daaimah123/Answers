import React, {useState} from 'react';
import ColorButton from './ColorButton';

const App = () => {
  
  // Do not remove this code
  const handleClick = () => {
   alert('you clicked a button')
  };

 return (
    <div>
      <ColorButton color="blue" onClick={handleClick}>
        Click Me!
      </ColorButton>
      <ColorButton color="green" onClick={handleClick}>
        Another Button
      </ColorButton>
    </div>
 );
};

export default App;