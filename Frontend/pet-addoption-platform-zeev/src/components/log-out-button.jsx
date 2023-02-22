function LogOutButton(props) {
    const { changeLogInStatus, action} = props;
    
    function logOut(e) {
        e.preventDefault();
        changeLogInStatus(false);
    
    }

    return (
        <>
            <button className={"home-page-button-" + action} onClick={logOut}>{action} </button>
        </>
    )

}

export default LogOutButton;