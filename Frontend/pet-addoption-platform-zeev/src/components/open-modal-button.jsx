function OpenModalButton(props) {
    const {  action, openCloseModalClick} = props;
        let buttonClass = {};
        if (action === "Sign up!") {
            buttonClass.main = "sign-up";
        }
        if (action === "Log in!") {
            buttonClass.question = "Already registerd?";
            buttonClass.main = "log-in";
        }
        if (action === "Log in as admin") {
            buttonClass.main = "log-in-admin";
        }
        if (action === "x") {
            buttonClass.main = "x";
        }
        // setButtonText(buttonText);


    function openModal(e) {
        e.preventDefault();
        openCloseModalClick(action);

    }

    return (
        <>
            <button className={"regular-button " + buttonClass.main} onClick={openModal}>
                <p className="question">{buttonClass.question} </p>
                <p>{action}</p>
            </button>
        </>
    )

}

export default OpenModalButton;