import { useState } from "react";
import OpenModalButton from "./open-modal-button";
import { usersArray } from "./sign-up-form";

function LogInForm(props) {
    const { openCloseModalClick, action} = props;
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const changeUserEmail = (e) => {
        setUserEmail(e.target.value);
    }
    const changeUserPassword = (e) => {
        setUserPassword(e.target.value);
    }

    function logIn(e) {
        let userIndex = usersArray.findIndex(user => user.username === userEmail)
        console.log(userIndex);
        if (userIndex < 0) {
                console.log("This user is not the array")
           }
        else {
            if(usersArray[userIndex].password === userPassword) {
                console.log("logged in!");
            }
            else {
                console.log("The password is not correct :( ")
        }
        }
        openCloseModalClick(action)
    }

    return(
        <div className="log-in-modal">
            <form>
                <div className="log-in-modal-content">login modal
                <input type='email'
                    placeholder='Enter your email'
                    value={userEmail}
                    onChange={changeUserEmail}
                    />
                    <input type='password'
                    placeholder='Emter your password'
                    value={userPassword}
                    onChange={changeUserPassword}                    />
                </div>
                </form>
                <button onClick={logIn}>
                    log in!
                </button>
                <OpenModalButton openCloseModalClick={openCloseModalClick} action="x"/>
            </div>


    )
}

export default LogInForm;