import { useState } from "react";
import { useContext } from "react";

import OpenModalButton from "./open-modal-button";
import serverURLContext from "../contexts/url-context";
import '../UIkit/elements/form.css';
import '../UIkit/elements/inputs.css';

function SignUpForm(props) {
  const { openCloseModalClick, action } = props;
  const serverURL = useContext(serverURLContext);
  const signUpPath = "/users/sign-up";

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordCheck, setUserPasswordCheck] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");



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
      if (usernameFromDB === "already signed in") {
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
              placeholder='Choose your password'
              value={userPassword}
              onChange={changeUserPassword}
            />
            <input type='password'
              placeholder='Please repeat password'
              value={userPasswordCheck}
              onChange={changeUserPasswordCheck}
            />
          </div>
          <label htmlFor="first-name">Your Name</label>
          <div>
            <input
              type='text'
              name="first-name"
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
          </div>
          <label htmlFor="phone-num">Your Phone Number</label>
          <div>
            <input
              name="phone-num"
              type='tel'
              placeholder='000-0000000'
              value={userPhoneNumber}
              onChange={changeUserPhoneNumber}
            />
          </div>
          <div className="sign-up-message">
            {showMessage ? <p>{message}</p> : ""}
          </div>
        </div>
        <button
          className={"regular-button inside-form"}
          onClick={signUp}
          disabled={userEmail.length === 0 || userPassword.length === 0 || userPasswordCheck.length === 0 || userFirstName.length === 0 || userLastName.length === 0 || userPhoneNumber.length === 0}>
          {action}
        </button>
      </form>
    </div>

  )
}

export default SignUpForm;
