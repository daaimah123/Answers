import React from 'react';

// replace your onClick with your new function name
const ColorButton = ({ children, color, updateMessage }) => {
  
 return (
   // replace the onClick value with an arrow function () => that calls your new function with a new message string
    <button style={{ backgroundColor: color }} onClick={ () => updateMessage("Good Morning!") }>
      {children}
    </button>
 );
};

export default ColorButton;