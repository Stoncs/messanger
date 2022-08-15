import React from 'react';

import './Popup.scss';

function Popup({elements}) {
  // elements = [{title, onclick}, {title, onClick}, ...]

  return (
    <div  className='popup'>
      {elements.map((element, index) => 
        <div 
          key={`${element.title}${index}`} 
          className='popup__element'
          onClick={element.onClick}
        >
          {element.title}
        </div>)}
    </div>
  );
}

export default Popup;