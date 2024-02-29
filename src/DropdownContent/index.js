import React from 'react';
import './DropdownContent.css'

function DropdownContent() {

  return (
    <div class="content">
        <div class="content-input-box">
            <input type="text" id="dropdown-options" placeholder="Search"></input>
        </div>

        <ul className="dropdown-list">
        </ul>
    </div>
  )
}

export {DropdownContent};