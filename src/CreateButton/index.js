import React from 'react'
import './CreateButton.css'
import { AppContext } from '../AppContext';

function CreateButton() {

  const {
    setOpenModal,
    openModal
  } = React.useContext(AppContext);

  return (
    <button
      className={`create-button`}
      onClick={() => {setOpenModal(!openModal)}}
    >Create a clock</button>
  )
}

export {CreateButton};