import { useState } from "react";
import { useContext } from "react";

import serverURLContext from "../contexts/url-context";
import '../UIkit/elements/form.css';
import '../UIkit/elements/inputs.css';

function ProfileSettingsForm(props) {
  const { isLoggedIn, currentUser, setCurrentUser } = props;
  const serverURL = useContext(serverURLContext);
  const updateProfilePath = "/users/profile";

  const [userEmail, setUserEmail] = useState("");
  const [userCurrentPassword, setUserCurrnetPassword] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userBio, setUserBio] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  async function updateUserInfoDB(user) {
    const updateUserResult = await fetch(`${serverURL}${updateProfilePath}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(user)
    }
    );
    const jsonUpdateUserResult = await updateUserResult.json();
    return jsonUpdateUserResult;

  }
  const resetInputsState = () => {
    setUserEmail("");
    setUserEmail("");
    setUserCurrnetPassword("");
    setUserNewPassword("");
    setUserFirstName("");
    setUserLastName("");
    setUserPhoneNumber("");
    setUserBio("");
  }

  const changeUserEmail = (e) => {
    setUserEmail(e.target.value);
  }
  const changeUserCurrentPassword = (e) => {
    setUserCurrnetPassword(e.target.value);
    setShowMessage(false);
  }
  const changeUserNewPassword = (e) => {
    setUserNewPassword(e.target.value);
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
  const changeUserBio = (e) => {
    setUserBio(e.target.value);
  }

  async function updateProfile(e) {
    let updatingUser = {};
    if (isLoggedIn === true) {
      if (currentUser.username.length > 0) {
        updatingUser.currentLoggedInUserName = currentUser.username;
      }
      updatingUser.username = userEmail;
      updatingUser.currentPassword = userCurrentPassword;
      updatingUser.newPassword = userNewPassword;
      updatingUser.firstName = userFirstName;
      updatingUser.lastName = userLastName;
      updatingUser.phoneNumber = userPhoneNumber;
      updatingUser.bio = userBio;
      const updatedUserFromDB = await updateUserInfoDB(updatingUser);
      if (updatedUserFromDB.username === "The password is incorrect") {
        setMessage(updatedUserFromDB.username);
        setShowMessage(true);

      }
      else {
        setMessage("");
        setShowMessage(false);
        setCurrentUser(updatedUserFromDB);
        resetInputsState();
      }
    }

  }


  return (
    <div className="form-container">
      <form>
        <div className="content">
          <label htmlFor="email">Username - valid email</label>
          <div>
            <input
              type='email'
              placeholder='Bobby@Lassie.com'
              value={userEmail}
              onChange={changeUserEmail}
            />
          </div>
          <label htmlFor="password">Password</label>
          <div>
            <input
              type='password'
              placeholder='Insert your current password'
              value={userCurrentPassword}
              onChange={changeUserCurrentPassword}
            />
            {showMessage ?
              <span>{message}</span> :
              <></>
            }
            <input
              type='password'
              placeholder='Enter the new password'
              value={userNewPassword}
              onChange={changeUserNewPassword}
            />
          </div>
          <label htmlFor="text">Update your Name</label>
          <div>
            <input
              type='text'
              placeholder='First Name'
              value={userFirstName}
              onChange={changeUserFirstName}
            />
            <input
              type='text'
              placeholder='Last Name'
              value={userLastName}
              onChange={changeUserLastName}
            />
          </div>
          <label htmlFor="email">Update your phone number</label>
          <input
            type='tel'
            placeholder='000-0000000'
            value={userPhoneNumber}
            onChange={changeUserPhoneNumber}
          />
        </div>
        <div className="textarea">
          <label htmlFor="textarea">Tell us about you..</label>
          <textarea
            type='textarea'
            placeholder='Here you can add a short bio'
            value={userBio}
            onChange={changeUserBio}
          />
        </div>

        <div className="button-box">
          <button
            className={"regular-button inside-form"}
            onClick={updateProfile}
            disabled={userEmail.length === 0 && userCurrentPassword.length === 0 && userNewPassword.length === 0 && userFirstName.length === 0 &&
              userLastName.length === 0 &&
              userPhoneNumber.length === 0}>
            Save Changes
          </button>
        </div>
      </form>
    </div>

  )
}

export default ProfileSettingsForm;
