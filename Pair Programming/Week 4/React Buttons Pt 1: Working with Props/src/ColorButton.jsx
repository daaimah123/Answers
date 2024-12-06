import React from 'react';

const ColorButton = ({ children, color, onClick }) => {
 return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {children}
    </button>
 );
};

export default ColorButton;