function OpenModalButton(props) {
    const { action, openCloseModalClick} = props;
    
    function openModal(e) {
        e.preventDefault();
        openCloseModalClick(action);
    
    }

    return (
        <>
            <button className={"open-close-modal-button-" + action} onClick={openModal}>{action} </button>
        </>
    )

}

export default OpenModalButton;