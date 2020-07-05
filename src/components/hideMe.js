import React, { useState } from 'react';


export default function hideMeNow() {
  const [showText, hideMe] = useState(false);



    
  
  return (
    <div className='hideme-wrapper'>
      {showText && <div>Hide Me!</div>}
      <button onClick={() => hideMe(!showText) }>Click Me!</button>
    </div>    
  );
  

}