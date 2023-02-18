function LogOutButton(props) {
    const { changeLogInStatus, changeCurrentUser, action} = props;
    
    function logOut(e) {
        e.preventDefault();
        changeLogInStatus(false);
        changeCurrentUser("log-out");
    
    }

    return (
        <>
            <button className={"home-page-button-" + action} onClick={logOut}>{action} </button>
        </>
    )

}

export default LogOutButton;