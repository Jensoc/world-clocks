import React from 'react';
import './ClockCounter.css';

function ClockCounter({total}) {
  return (
    <h1>
      <span>{total} </span>
      World Clocks!
    </h1>
  )
}

export {ClockCounter};