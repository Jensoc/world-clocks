import React, { useContext} from 'react';
import { useFetch } from '../DropdownContent/useFetch';
import './DropdownItem.css'
import { AppContext } from '../AppContext';

function DropdownItem({saveTimezone, item }) {

  const {addTimezoneClock} = useContext(AppContext);

  const {addClock, setOpenModal, setDropdown} = useContext(AppContext);

  const newClock = () => {
    setOpenModal(false);
    setDropdown(false);
    addClock(time, city);
    console.log(`Al enviar: "${time}", "${city}", "${item}"`);

  }

  let url = "http://worldtimeapi.org/api/timezone/" + item;
  const {time, city, fetchLoading} = useFetch(url);
    
  return (
    <li
      className='dropdown-li'
      onClick={()=>{newClock(); ; addTimezoneClock(item); console.log("dropdwon item:", item)}}
    >
      {fetchLoading && <p>Loading...</p>}
      {!fetchLoading && time} - {!fetchLoading && city}
    </li>
  )
}

export {DropdownItem};