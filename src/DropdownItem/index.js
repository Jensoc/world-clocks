import React, { useContext} from 'react';
import { useFetch } from '../DropdownContent/useFetch';
import './DropdownItem.css'
import { AppContext } from '../AppContext';

function DropdownItem({ country }) {

  const {addTimezoneClock} = useContext(AppContext);

  const {
    addClock,
    setOpenModal,
    setDropdown
  } = useContext(AppContext);

  const newClock = () => {
    setOpenModal(false);
    setDropdown(false);
    addClock(time, city);

  }

  let url = "http://worldtimeapi.org/api/timezone/" + country;
  const {time, city, fetchLoading} = useFetch(url);
    
  return (
    <li
      className='dropdown-li'
      onClick={()=>{newClock() ; addTimezoneClock(country)}}
    >
      {fetchLoading && <p>Loading...</p>}
      {!fetchLoading && time} - {!fetchLoading && city}
    </li>
  )
}

export {DropdownItem};