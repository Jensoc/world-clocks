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
                    <div className="header">
                        <h1>Search your location</h1>
                        <button
                            className="modal-button"                  
                            onClick={() => {setOpenModal(!openModal)}}

                        >✖</button>

                    </div>

                    
                {children}
                </div>
            </div>,
            document.getElementById("modal")
        )
    }
}
 
export { Modal };