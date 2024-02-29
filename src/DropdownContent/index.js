import React from 'react';
import './DropdownContent.css'
import { useFetch } from './useFetch';

function DropdownContent() {

  const {data, loading} = useFetch("http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires");
  
  const time = data?.datetime.substring(11,19);
  const zone = data?.timezone.split("/");
  const city = zone?.[2].replace("_", " ");
  const country = zone?.[1];


  return (
    <div class="content">
        <div class="content-input-box">
            <input type="text" id="dropdown-options" placeholder="Search"></input>
        </div>

        <ul className="dropdown-list">
          {loading && <p>Loading!</p>}
          <li>{!loading && time} {!loading && city}, {!loading && country}</li>
        </ul>
    </div>
  )
}

export {DropdownContent};