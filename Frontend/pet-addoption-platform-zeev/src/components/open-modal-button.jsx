function OpenModalButton(props) {
    const { action, openCloseModalClick } = props;
    let buttonProperties = {};
    switch (action) {
        case "Sign up!":
            buttonProperties.class = "sign-up";
            break;
        case "Log in!":
            buttonProperties.question = "Already registerd?";
            buttonProperties.class = "log-in";
            break
        case "Log in as admin":
            buttonProperties.class = "log-in-admin";
            break
        case "x":
            buttonProperties.class = "x";
            break
        default:
            buttonProperties.class = "";
    }

    function openModal(e) {
        e.preventDefault();
        openCloseModalClick(action);
    }

    return (
        <>
            <button
                className={"regular-button " + buttonProperties.class}
                onClick={openModal}>
                <p className="question">{buttonProperties.question} </p>
                <p>{action}</p>
            </button>
        </>
    )
}

export default OpenModalButton;