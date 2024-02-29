import React from "react";
import './Dropdown.css';
import { FaCaretDown } from "react-icons/fa";
import { AppContext } from "../AppContext";

function Dropdown() {

    const {dropdown, setDropdown} = React.useContext(AppContext);

  return (
    <div className="dropdown-box">
        <div className="input-box">
            <input type="text" placeholder="Select" id="dropdown-input" readOnly name="" onClick={() =>{setDropdown(!dropdown)}}></input>
            <div className="arrow-icon" onClick={() =>{setDropdown(!dropdown)}}>
                <FaCaretDown color="#0c1f2e"/>
            </div>
        </div>
    </div>
  )
}

export {Dropdown};