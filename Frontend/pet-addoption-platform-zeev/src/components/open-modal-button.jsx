function OpenModalButton(props) {
    const { action, openCloseModalClick} = props;
    
    function openModal(e) {
        e.preventDefault();
        openCloseModalClick(action);
    
    }

    return (
        <>
            <button className={"home-page-button-" + action} onClick={openModal}>{action} </button>
        </>
    )

}

export default OpenModalButton;