function OpenModalButton(props) {
    const { action, openCloseModalClick} = props;
    
    function openModal(e) {
        e.preventDefault();
        openCloseModalClick(action);
        console.log(action)
    
    }

    return (
        <>
            <button className={"open-modal-button-" + action} onClick={openModal}>{action} </button>
        </>
    )

}

export default OpenModalButton;