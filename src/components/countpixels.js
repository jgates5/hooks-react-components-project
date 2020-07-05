import React, { useState } from 'react';

export default function UporDown () {
  const [ size, sizeChange] = useState(12);
  const [ count, countChange] = useState(0);


    const list1= () => sizeChange(size + 1)
    const list2= () => sizeChange(size - 1)

    const list3= () => countChange(count + 1)
    const list4= () => countChange(count - 1)
     
  return (
    <div className='count-wrapper'>

      <h3 style={{ fontSize: size }}>{size}px</h3>
      <input placeholder = {count} />
      <button onClick={ () => {
        list1(); 
        list3(); 
        }}>
          Up
        </button>
        <button onClick={ () => {
        list2(); 
        list4(); 
        }}>
          Down
        </button>

    </div>
  );
}

/* <button
        onClick={() => {
          greeting();
          waveHello();
        }}>
        I'm a button
      </button> 
      <button onClick={ () =>{list2(); list4() }}>Down</button>
      
      */