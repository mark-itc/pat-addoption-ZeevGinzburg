import { useState } from "react";
import { useReducer } from "react";
import OpenModalButton from "./open-modal-button";

let usersArray =[];

function SignUpForm(props) {
  const { openCloseModalClick, action} = props;
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordCheck, setUserPasswordCheck] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  
  
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
  
  function signUp(e) {
    // e.preventDeafult();
    // currentSigningUser.username = userEmail;
    // currentSigningUser.password = userPassword;
    currentSigningUser.username = userEmail;
    if (userPassword !== userPasswordCheck){
      console.log("The passwords you entered do not match ");
    } 
    else {
      currentSigningUser.password = userPassword;
    }
    currentSigningUser.firstName = userFirstName;
    currentSigningUser.lastName = userLastName;
    currentSigningUser.phoneNumber = userPhoneNumber;
    console.log(currentSigningUser);
    usersArray.push(currentSigningUser);
    console.log(usersArray);

    openCloseModalClick(action);

  } 


    return(
        <div className="sign-up-modal">
        <form className="sign-up">
          <div className="sign-up-modal-content"> sign up modal
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
          </div>
        </form>
        <button onClick={signUp}>
          sign me up!
        </button>
        <OpenModalButton openCloseModalClick={openCloseModalClick} action="x"/>
      </div>

    )
}

export default SignUpForm;
export {usersArray};