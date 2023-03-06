import { useState } from "react";
import { useContext } from "react";

import OpenModalButton from "./open-modal-button";

import serverURLContext from "../contexts/url-context";

import '../UIkit/elements/form.css';
import '../UIkit/elements/buttons.css';
import '../UIkit/elements/inputs.css';

const logInPath = "/users/log-in"; //maybe need to be move


function LogInForm(props) {
    const { openCloseModalClick, action, changeLogInStatus, changeAdminStatus, setCurrentUser } = props;
    const serverURL = useContext(serverURLContext);



    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    const [message, setMessage] = useState("");


    const changeUserEmail = (e) => {
        setUserEmail(e.target.value);
        setShowMessage(false);
    }
    const changeUserPassword = (e) => {
        setUserPassword(e.target.value);
        setShowMessage(false);

    }
    const changeAdminPassword = (e) => {
        setAdminPassword(e.target.value);
        setShowMessage(false);
    }

    //maybe unite this func and the log in admin func in the log in form and prop it from the parent
    async function logInUser(loggingUser) {

        const logInResult = await fetch(`${serverURL}${logInPath}`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(loggingUser)
        }
        );
        const jsonLogInResult = await logInResult.json();

        return jsonLogInResult;

    }


    async function logIn(e) {
        e.preventDefault();
        let message;
        const loggingUser = {};

        if (action === "Log in as admin") {
            loggingUser.username = userEmail;
            loggingUser.password = userPassword;
            loggingUser.adminPassword = adminPassword;
            
        }
        else {
            loggingUser.username = userEmail;
            loggingUser.password = userPassword;
        }
        const loginFetchResult = await logInUser(loggingUser);

        if (loginFetchResult.username === "username not found") {
            message = "You haven't registered to Lassie yet - please sign up first :)";
            setShowMessage(true);
            console.log(message);
        }
        else if (loginFetchResult.username === "The password is incorrect") {
            message = loginFetchResult.username;
            console.log(message);
            setIsPasswordCorrect(false);
            setShowMessage(true);
        }
        else {
            if (loginFetchResult.isAdmin) {
                changeAdminStatus(true);
            }
            changeLogInStatus(true);
            setCurrentUser(loginFetchResult);
            setIsPasswordCorrect(true);
            setShowMessage(false);
            openCloseModalClick("log-in");

        }
        setMessage(message);
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
                    <div>
                        {action === "Log in as admin" ?
                            <>
                                <input type='password'
                                    placeholder='Enter admins password'
                                    value={adminPassword}
                                    onChange={changeAdminPassword}
                                />
                            </> : ""}
                    </div>
                    <div className="log-in-message">
                        <p>{showMessage ? message : ""}  </p>

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