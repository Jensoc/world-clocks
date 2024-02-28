import React from "react";
import './Dropdown.css'

function Dropdown() {
  return (
    <div className="dropdown-box">
    <div className="input-box">
        <input type="text" placeholder="Select" id="dropdown-input" readOnly name=""></input>
    </div>

    <div class="content">
        <div class="content-input-box">
            <input type="text" id="dropdown-options" placeholder="Search"></input>
        </div>
        <ul className="options">
            <li>Test1</li>
            <li>Test2</li>
            <li>Test3</li>
            <li>Test4</li>
            <li>Test5</li>
            <li>Test6</li>
            <li>Test7</li>
        </ul>
    </div>

</div>
  )
}

export {Dropdown};