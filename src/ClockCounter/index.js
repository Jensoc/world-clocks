import React from 'react';
import { AppContext } from '../AppContext';
import './ClockCounter.css'

function ClockCounter() {
  const {clocksCount: total} = React.useContext(AppContext);

  return (
    <h1>
      <span>{total} </span> World Clocks
    </h1>
  )
}

export {ClockCounter};