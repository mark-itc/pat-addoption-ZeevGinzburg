function LogOutButton(props) {
    const { changeLogInStatus, action} = props;
    
    function logOut(e) {
        e.preventDefault();
        changeLogInStatus(false);
    
    }

    return (
        <>
            <button className={"regular-button " + action} onClick={logOut}> log out? </button>
        </>
    )

}

export default LogOutButton;