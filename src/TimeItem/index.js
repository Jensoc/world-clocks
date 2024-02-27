import React from "react";
import './TimeItem.css'

function TimeItem({text, day, onDelete}) {

  return(
    <li className="clock-item">
      <span className={`status`}>{day}</span>
      <p>{text}</p>
      <p>22:22</p>
      <span
        className="delete-clock"
        onClick={onDelete}
        >✖</span>
    </li>
  );
}

// const clockState = document.querySelectorAll('.day');

// clockState.forEach((e) => {
//   e.innerHTML = "🌞";
// });

export {TimeItem};