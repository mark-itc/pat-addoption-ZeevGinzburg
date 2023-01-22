import { useState } from "react";
function OpenModalButton(props) {
    const { action} = props;
    let {isModalOpened } = props;

    function openModal(e) {
        e.preventDefault();
        isModalOpened = true;
        console.log(isModalOpened);

    }

    return (
        <>
            <button className="open-modal-button" onClick={openModal}>{action} </button>
        </>
    )

}

export default OpenModalButton;