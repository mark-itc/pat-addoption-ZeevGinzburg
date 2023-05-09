function LogOutButton(props) {
    const { changeLogInStatus, action, changeAdminStatus } = props;
    
    function logOut(e) {
        e.preventDefault();
        changeLogInStatus(false);
        changeAdminStatus(false); 
    }

    return (
        <>
            <button
                className= "regular-button log-out"
                onClick={logOut}>
                     {action}
            </button>
        </>
    )
}

export default LogOutButton;