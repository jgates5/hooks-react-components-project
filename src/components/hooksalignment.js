import React, { useState } from 'react';




export default function alignmentChanger () {
  const [alignment, updateAlignment] = useState("left")

  return (
    <div className='alignment-wrapper'>
    <h1 style={{textAlign: alignment}}> Align me</h1>
      <button onClick={() => updateAlignment("left")}>Left</button>
      <button onClick={() => updateAlignment("center")}>Center</button>
      <button onClick={() => updateAlignment("right")}>Right</button>
    </div>
  );
}
