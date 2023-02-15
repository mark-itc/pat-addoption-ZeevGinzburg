function Header(props) {
    const {isLoggedIn, currentUser, page } = props;
    // console.log (isLoggedIn);
    console.log (currentUser.firstName);
    console.log (currentUser.lastName);

    const greetingForHomePage = `welcome ${isLoggedIn ? currentUser.firstName + " " + currentUser.lastName : ""}  to 'Pet4U' your friendly pet adoption platform`;
    const greetingForProfilePage = `Hi ${currentUser.firstName}  ${currentUser.lastName} here you can change your settings..`;
    const greetingForMyPetsPageHave = `Hi ${currentUser.firstName}  ${currentUser.lastName} here is all your pets!`;
    const greetingForMyPetsPageNotHave = `Hi ${currentUser.firstName}  ${currentUser.lastName} you still have no pets.. `;
    let headerGreeting;

    if (page === "homepage") {
        headerGreeting = greetingForHomePage;
    }
    else if (page === "profile-settings-page"){
        headerGreeting = greetingForProfilePage;
    }
    else if (page === "my-pets-page-have"){
        headerGreeting = greetingForMyPetsPageHave;
    }
    else if (page === "my-pets-page-not-have"){
        headerGreeting = greetingForMyPetsPageNotHave;
    }
    else {
        headerGreeting = "DEAFULT GREETING";
    }

    return(
        <div>
            <header className="login-header">
                <p>{headerGreeting}
                </p>
        <div className="explain">
            <p>
                {page === "homepage" ? "in this site, you can choose a pet, and to adopt it!": ""}
            </p>
        </div>
            </header>
        </div>


    )
}

export default Header;