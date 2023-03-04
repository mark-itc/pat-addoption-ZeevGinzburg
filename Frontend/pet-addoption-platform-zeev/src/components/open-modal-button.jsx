function OpenModalButton(props) {
    const {question, action, openCloseModalClick} = props;
    const buttonText = (action) =>{
        let buttonText = {};
        if (action === "sign-up") {
            buttonText.main = "Sign up!";
        }
        if (action === "log-in") {
            buttonText.question = "Already registerd?";
            buttonText.main = "log in!";
           
        }
        if (action === "log-in-admin") {
            buttonText.main = "Log in as Admin";
        }
        if (action === "x") {
            buttonText.main = "x";
        }
        return buttonText;

    };
    function openModal(e) {
        e.preventDefault();
        openCloseModalClick(action);
    
    }

    return (
        <>
            <button className={"regular-button " + action} onClick={openModal}>
                <p className="question">{buttonText(action).question} </p>
                <p>{buttonText(action).main}</p>
            </button>
        </>
    )

}

export default OpenModalButton;