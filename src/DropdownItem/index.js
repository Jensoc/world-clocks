import React, { useContext} from 'react';
import { useFetch } from '../DropdownContent/useFetch';
import './DropdownItem.css'
import { AppContext } from '../AppContext';

function DropdownItem({ item, id }) {

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

  let url = "http://worldtimeapi.org/api/timezone/" + item;
  const {time, city, fetchLoading} = useFetch(url);
    
  return (
    <li
      className='dropdown-li'
      onClick={()=>{newClock(); ; addTimezoneClock(item)}}
    >
      {fetchLoading && <p>Loading...</p>}
      {!fetchLoading && time} - {!fetchLoading && city}
    </li>
  )
}

export {DropdownItem};