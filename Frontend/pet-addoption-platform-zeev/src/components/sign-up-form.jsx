import { useState } from "react";
import { useContext } from "react";

import OpenModalButton from "./open-modal-button";
import serverURLContext from "../contexts/url-context";
import '../UIkit/elements/form.css';


function SignUpForm(props) {
  const { openCloseModalClick, action } = props;
  const serverURL = useContext(serverURLContext);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordCheck, setUserPasswordCheck] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");

  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const signUpPath = "/users/sign-up";


  async function addUserToDB(currentUser) {
    const signUpResult = await fetch(`${serverURL}${signUpPath}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(currentUser)
    }
    );
    const jsonSignUpResult = await signUpResult.json();
    return jsonSignUpResult.username;

  }


  const changeUserEmail = (e) => {
    setUserEmail(e.target.value);
  }
  const changeUserPassword = (e) => {
    setUserPassword(e.target.value);
  }
  const changeUserPasswordCheck = (e) => {
    setUserPasswordCheck(e.target.value);
  }
  const changeUserFirstName = (e) => {
    setUserFirstName(e.target.value);
  }
  const changeUserLastName = (e) => {
    setUserLastName(e.target.value);
  }
  const changeUserPhoneNumber = (e) => {
    setUserPhoneNumber(e.target.value);
  }
  let currentSigningUser = {};

  async function signUp(e) {

    currentSigningUser.username = userEmail;
    if (userPassword !== userPasswordCheck) {
      setMessage("The passwords you entered do not match ");
      setShowMessage(true);
    }
    else {
      currentSigningUser.password = userPassword;
      currentSigningUser.firstName = userFirstName;
      currentSigningUser.lastName = userLastName;
      currentSigningUser.phoneNumber = userPhoneNumber;
      const usernameFromDB = await addUserToDB(currentSigningUser);
      if (usernameFromDB == "already signed in") {
        setMessage(usernameFromDB);
        setShowMessage(true);

      }
      else {
        console.log(usernameFromDB);
        console.log('signed in success')
        openCloseModalClick(action);
      }

    }

  }


  return (
    <div className="form-modal-container">
      <form>
        {/* <div className="form-modal-header"> */}
          <OpenModalButton openCloseModalClick={openCloseModalClick} action="x" />
        {/* </div> */}
        <div className="form-modal-content">
          {/* insert labels to the inputs */}
          <input type='email'
            placeholder='Enter your email'
            value={userEmail}
            onChange={changeUserEmail}
          />
          <input type='password'
            placeholder='Choose your password'
            value={userPassword}
            onChange={changeUserPassword}
          />
          <input type='password'
            placeholder='Please repeat your password'
            value={userPasswordCheck}
            onChange={changeUserPasswordCheck}
          />
          <input
            type='text'
            placeholder='Your First Name'
            value={userFirstName}
            onChange={changeUserFirstName}
          />
          <input
            type='text'
            placeholder='Your Last Name'
            value={userLastName}
            onChange={changeUserLastName}
          />
          <input
            type='tel'
            placeholder='Please enter your phone number'
            value={userPhoneNumber}
            onChange={changeUserPhoneNumber}
          />
          <div className="sign-up-message">
            {showMessage ? <p>{message}</p> : ""}
          </div>
        </div>
        <button 
          className={"open-close-modal-button"}
          onClick={signUp} 
          disabled={userEmail.length == 0 || userPassword.length == 0 || userPasswordCheck.length == 0 || userFirstName.length == 0 || userLastName.length == 0 || userPhoneNumber.length == 0}>
         { action}
        </button>

      </form>
    </div>

  )
}

export default SignUpForm;
