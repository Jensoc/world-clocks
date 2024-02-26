import React from "react";
import './TimeItem.css'

function TimeItem(props) {
    return(
      <li className="clock-item">
        <span className={`status`}>🕦</span>
        <p>{props.text}</p>
        <p>22:22</p>
        <span
          className="delete-clock"
          onClick={props.onDelete}
          >✖</span>
      </li>
    );
}

export {TimeItem};