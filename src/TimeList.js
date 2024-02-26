import React from 'react'
import './TimeList.css'

function TimeList(props, clocks, setClocks) {
  return (
    <ul>
      {props.children}
    </ul>
  );
}

export {TimeList};