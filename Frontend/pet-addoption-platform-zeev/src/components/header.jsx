function Header(props) {
    const {isLoggedIn, currentUser, page, greeting } = props;


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