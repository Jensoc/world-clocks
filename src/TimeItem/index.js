import React from "react";
import './TimeItem.css'

function TimeItem({
  city,
  time,
  day,
  onDelete,}) {

  return(
    <li className="clock-item">
      <span className={`status`}>{day}</span>
      <p>{city}</p>
      <p>{time}</p>
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