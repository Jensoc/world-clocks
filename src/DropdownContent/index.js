import React, { useState } from 'react';
import './DropdownContent.css'
import { useFetchClockList } from './useFetchClockList.js';
import { DropdownItem } from '../DropdownItem/index.js';

// 1. Haz que el boton add clock funcione
// 1.1 haz que funcione el search
// 
// 2 dale estilos en la dropdown-list
// 3. Tienes que hacer la actualizacion de los componentes cada 60 segs
// 4. Averigua como imprimir todas las timezones - LISTO 

function DropdownContent() {

  const [searchValue, setSearchValue] = useState("");
  const countryList = useFetchClockList();

  console.log(countryList);
  console.log(countryList?.sort());

  if (countryList) {
    const searchedClocks = countryList.filter(
      (item) => (
        item?.country?.includes(searchValue)
      )
    );
  }

  console.log(searchValue)

  console.log(countryList);

  return (
    <div class="content">
        <div class="content-input-box">
            <input type="text" id="dropdown-options" placeholder="Search" onChange={(e)=> {setSearchValue(e.target.value);}}>
          </input>
        </div>

        <ul className="dropdown-list">
          {countryList && countryList.map((item)=>(
            <DropdownItem 
              item = {item}
            />
          ))}
        </ul>
    </div>
  )
}

export {DropdownContent};