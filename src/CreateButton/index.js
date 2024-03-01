import React from 'react'
import './CreateButton.css'
import { AppContext } from '../AppContext';

function CreateButton() {

  const {
    setOpenModal,
  } = React.useContext(AppContext);

  return (
    <button
      className={`create-button`}
      onClick={() => {setOpenModal(true)}}
    >Create a clock</button>
  )
}

export {CreateButton};