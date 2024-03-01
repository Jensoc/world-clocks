import React, { useContext} from 'react';
import { useFetch } from '../DropdownContent/useFetch';
import './DropdownItem.css'
import { AppContext } from '../AppContext';

function DropdownItem({item}) {

  const {addClock, setOpenModal} = useContext(AppContext);

  const newClock = () => {
    setOpenModal(false);
    addClock(time, city);
    console.log(`Al enviar: "${time}", "${city}"`);
  }

  let url = "http://worldtimeapi.org/api/timezone/" + item;
  const {time, city, fetchLoading} = useFetch(url);
    
  return (
    <li
      className='dropdown-li'
      onClick={newClock}
    >
      {fetchLoading && <p>Loading...</p>}
      {!fetchLoading && time} - {!fetchLoading && city}
    </li>
  )
}

export {DropdownItem};