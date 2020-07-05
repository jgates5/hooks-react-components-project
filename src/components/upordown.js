import React, { useState } from 'react';

export default function UporDown () {
  const [change, countChange] = useState(0);

  const upCount = () => countChange(change + 1)
  const downCount = () => countChange(change - 1)

 
    
  return (
    <div className='count-wrapper'>
        
      <button onClick={upCount}>Up</button>
      <h1>{change}</h1>
      <button onClick={downCount}>Down</button>
    </div>
  );

}