import React from 'react'
import './TimeList.css'

function TimeList(props) {

  return (
    <ul>
      {props.children}
    </ul>
  );
}

export {TimeList};