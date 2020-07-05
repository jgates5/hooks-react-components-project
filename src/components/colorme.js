import React, { useState } from 'react';


export default function colorMe() {
  const  [setColor, setNewColor] = useState('');
  

  const setTheColor = () => setNewColor(event.target.value);
 
  
  

  
  return (
    <div className='color-wrapper'>
        <h2 style={{ color: setColor}}>Color ME!</h2> 
      <form>       
        <input placeholder="enter color"  onChange={event => setTheColor()}/>      </form>       
    </div>
  )  
}

