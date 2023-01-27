import { useState } from "react";
function OpenModalButton(props) {
    const { action, openCloseModalClick} = props;
    
    function openModal(e) {
        e.preventDefault();
        openCloseModalClick(action);
    
    }

    return (
        <>
            <button className="open-modal-button" onClick={openModal}>{action} </button>
        </>
    )

}

export default OpenModalButton;