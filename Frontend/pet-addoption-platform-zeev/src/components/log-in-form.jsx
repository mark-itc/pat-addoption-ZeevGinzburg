import { useState } from "react";
import { useContext } from "react";

import OpenModalButton from "./open-modal-button";
import '../UIkit/elements/form.css';
import '../UIkit/elements/buttons.css';
import '../UIkit/elements/inputs.css';

function LogInForm(props) {
    const { openCloseModalClick, action, changeLogInStatus, logInUser, setCurrentUser } = props;


    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);



    const changeUserEmail = (e) => {
        setUserEmail(e.target.value);
        setShowMessage(false);
    }
    const changeUserPassword = (e) => {
        setUserPassword(e.target.value);
        setShowMessage(false);

    }

    //maybe unite this func and the log in admin func in the log in form and prop it from the parent

    async function logIn(e) {
        const loggingUser = {
            username: userEmail,
            password: userPassword
        }
        const loginFetchResult = await logInUser(loggingUser);
        console.log(loginFetchResult);
        if (loginFetchResult.username === "The password is incorrect") {
            setIsPasswordCorrect(false);
            console.log("setIsPasswordCorrect to flase");
            setShowMessage(true);
        }
        else {
            changeLogInStatus(true);
            setCurrentUser(loginFetchResult);
            setIsPasswordCorrect(true);
            console.log("setIsPasswordCorrect to true");
            setShowMessage(false);
            openCloseModalClick("log-in");

        }

    }

    const incorrectPasswordMessage = "The password is not correct :("
    const correctPasswordMessage = "welcome in!"



    return (
        <div className="form-modal-container">
            <form>
                <OpenModalButton openCloseModalClick={openCloseModalClick} action="x" />

                <div className="form-modal-content">
                    <label htmlFor="email">Username - valid email</label>
                    <div>
                        <input type='email'
                            placeholder='Enter your email'
                            value={userEmail}
                            onChange={changeUserEmail}
                        />
                    </div>
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type='password'
                            placeholder='Enter your password'
                            value={userPassword}
                            onChange={changeUserPassword}
                        />
                    </div>
                    <div className="log-in-message">
                        <p>{showMessage ? incorrectPasswordMessage : ""}  </p>

                        {/* {isPasswordCorrect ? <p>{ correctPasswordMessage} </p> : <p> {incorrectPasswordMessage}</p> } */}
                    </div>
                </div>
                <button
                    className={"regular-button inside-form"}
                    disabled={userEmail.length == 0 || userPassword.length == 0 || showMessage}
                    // disabled={!isPasswordCorrect}
                    onClick={logIn}>
                    {action}
                </button>
            </form>
        </div>


    )
}

export default LogInForm;