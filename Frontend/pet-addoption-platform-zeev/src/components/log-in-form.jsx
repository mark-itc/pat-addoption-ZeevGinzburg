import { useState } from "react";
import { useContext } from "react";

import OpenModalButton from "./open-modal-button";
import { usersArray } from "./sign-up-form";

function LogInForm(props) {
    const { openCloseModalClick, action, changeLogInStatus, logInUser} = props;
     

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    

    const changeUserEmail = (e) => {
        setUserEmail(e.target.value);
    }
    const changeUserPassword = (e) => {
        setUserPassword(e.target.value);
        setShowMessage(false);
    }
    
    function logIn(e) {
        const loggingUser = {
            username: userEmail,
            password: userPassword
        }
        logInUser(loggingUser);
        // here I need to receive back the response and show the messege, and arrange beck the closing of the modal 
        
        // let userIndex = usersArray.findIndex(user => user.username === userEmail)
        // if (userIndex < 0) {
        //         console.log("This user is not the array")
        //    }
        // else {
        //     if(usersArray[userIndex].password === userPassword) {
        //         setIsPasswordCorrect(true);
        //         changeLogInStatus(true);
        //         openCloseModalClick(action);

        //         // maybe add a modal with a timeout that welcome the user..
        //     }
        //     else {
        //         console.log("The password is not correct :( ");
        //         setIsPasswordCorrect(false);
        //         setShowMessage(true);
               
        // }
        // }

    }

    const incorrectPasswordMessage = "The password is not correct :("
    const correctPasswordMessage = "welcome in!"
    


    return(
        <div className="log-in-modal">
            <form>
                <div className="log-in-modal-content">
                    {/* insert labels */}
                <input type='email'
                    placeholder='Enter your email'
                    value={userEmail}
                    onChange={changeUserEmail}
                    />
                    <input type='password'
                    placeholder='Emter your password'
                    value={userPassword}
                    onChange={changeUserPassword}
                    />
                    <div className="log-in-message">
                        {showMessage ? <p>{isPasswordCorrect ? correctPasswordMessage :incorrectPasswordMessage}</p> : ""}
                    </div>
                </div>
                </form>
                <button 
                    disabled={showMessage}
                    // disabled={!isPasswordCorrect}
                    onClick={logIn}>
                    log in!
                </button>
                <OpenModalButton openCloseModalClick={openCloseModalClick} action="x"/>
            </div>


    )
}

export default LogInForm;