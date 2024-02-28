import React from "react";
import ReactDOM from "react-dom";
import {AppContext} from '../AppContext'
import './Modal.css'

function Modal({children}) {

    const {
        openModal,
        setOpenModal
    } = React.useContext(AppContext);
    
    if (openModal === true) {
        return ReactDOM.createPortal(
            <div className="modal-container">

                <div className="modal">

                    <button
                        className="modal-button"                     
                        onClick={() => {setOpenModal(!openModal); console.log(openModal)}}

                    >✖</button>

                    <h1>Search your location</h1>
                    
                {children}
                </div>
            </div>,
            document.getElementById("modal")
        )
    }
}
 
export { Modal };