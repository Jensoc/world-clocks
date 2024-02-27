import React from 'react'
import './TimeSearch.css'

function TimeSearch({searchValue, setSearchValue}) {

  return (
    <input
      placeholder="New York..."
      value= {searchValue}
      onChange={(e)=> {
        setSearchValue(e.target.value);
      }}
    />
  )
}

export {TimeSearch};