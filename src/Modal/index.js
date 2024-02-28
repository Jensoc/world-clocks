import React from "react";
import ReactDOM from "react-dom";
import {AppContext} from '../AppContext'

function Modal({children}) {

    const {
        openModal,
        setOpenModal
    } = React.useContext(AppContext);

    return ReactDOM.createPortal(
        <div className="modal-container">
            {children}
        </div>,
        document.getElementById("modal")
    );
}
 
export { Modal };