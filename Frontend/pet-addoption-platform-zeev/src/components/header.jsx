function Header(props) {
    const {isLoggedIn, currentUser, page, greeting } = props;
    console.log (isLoggedIn);


    return(
        <div>
            <header className="login-header">
                <p>{greeting}
                </p>

            </header>
        </div>


    )
}

export default Header;