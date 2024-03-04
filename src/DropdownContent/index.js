import React, { useEffect, useState } from 'react';
import './DropdownContent.css'
import { useFetchClockList } from './useFetchClockList.js';
import { DropdownItem } from '../DropdownItem/index.js';



// 1. Haz que el boton add clock funcione
// 1.1 haz que funcione el search - FUNCIONA.
// 
// 2 dale estilos en la dropdown-list
// 3. Tienes que hacer la actualizacion de los componentes cada 60 segs
// 4. Averigua como imprimir todas las timezones - LISTO 

function DropdownContent() {

  const [searchValue, setSearchValue] = useState("");
  const [searchedClocks, setSearchedClocks] = useState([]); 
  
  const countryList = useFetchClockList();

    useEffect(() => {
      setTimeout(() => {
        if (countryList) {
          const filteredClocks = countryList.filter((item) => {
            const clockCountry = item?.country.toLocaleLowerCase();
            const searchedText = searchValue?.toLocaleLowerCase();
            return clockCountry.includes(searchedText);
          });
          setSearchedClocks(filteredClocks);
        }
      }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryList]);

  return (
    <div className="content">
        <div className="content-input-box">
            <input type="text" id="dropdown-options" placeholder="Search" onChange={(e)=> setSearchValue(e.target.value)}></input>
        </div>

        <ul className="dropdown-list">
          {searchedClocks.map((item)=>(
            <DropdownItem
              key ={item.key}
              item = {item.country}
            />
          ))}
        </ul>
    </div>
  )
}

export {DropdownContent};