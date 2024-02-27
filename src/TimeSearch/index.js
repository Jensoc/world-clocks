import React from 'react'
import './TimeSearch.css'
import { AppContext } from '../AppContext';

function TimeSearch() {

  const {searchValue, setSearchValue} = React.useContext(AppContext);

  return (
    <input
      placeholder="Search your clock"
      value= {searchValue}
      onChange={(e)=> {
        setSearchValue(e.target.value);
      }}
    />
  )
}

export {TimeSearch};