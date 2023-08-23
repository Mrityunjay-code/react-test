import React, { useState } from 'react';

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [Visible,notVisible] =useState(true);


  const handleToggle = () => {
    setIsVisible(!isVisible) &&
   notVisible(!Visible)
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
    
      {isVisible && <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa consequatur voluptates ex obcaecati sunt deserunt deleniti, minima, <br/>molestias quasi officiis necessitatibus ullam vel? Sunt sint optio vitae esse porro blanditiis. </p>}
     {Visible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tenetur voluptate vitae vero,<br/> ad excepturi aliquid cum itaque veniam officiis, ab nulla. Quisquam nostrum nihil et vero deserunt ab dolore?'</p>}
    </div>
  );
};

export default ToggleText;
