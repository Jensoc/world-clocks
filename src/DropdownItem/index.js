import React from 'react';
import { useFetch } from '../DropdownContent/useFetch';
import './DropdownItem.css'

function DropdownItem({item}) {

    let url = "http://worldtimeapi.org/api/timezone/" + item;
    const {time, city, fetchLoading} = useFetch(url);
    
  return (
    <li className='dropdown-li'>
        {fetchLoading && <p>Loading...</p>}
        {!fetchLoading && time} - {!fetchLoading && city}
    </li>
  )
}

export {DropdownItem};