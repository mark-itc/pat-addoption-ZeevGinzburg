import { useState } from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
//need to change it to context ..

import '../UIkit/pages/page.css';
import '../UIkit/elements/form.css'




function ProfileSettingsPage(props) {
  const { isLoggedIn, currentUser } = props;
  const [userCurrentEmail, setUserCurrentEmail] = useState(currentUser.username); //maybe set the deafult as the logged in current email
  const [userNewEmail, setUserNewEmail] = useState("");
  const [userCurrentPassword, setUserCurrentPassword] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [userFirstName, setUserFirstName] = useState(""); //maybe set the deafult as the logged in current name
  const [userLastName, setUserLastName] = useState(""); //maybe set the deafult as the logged in current name
  const [userPhoneNumber, setUserPhoneNumber] = useState("");//maybe set the deafult as the logged in current phone
  const [userBio, setUserBio] = useState("");
  let page = "profile-settings-page";

  //
  const changeUserCurrentEmail = (e) => {
    setUserCurrentEmail(e.target.value);
  }
  const changeUserNewEmail = (e) => {
    setUserNewEmail(e.target.value);
  }
  const changeUserCurrentPassword = (e) => {
    setUserCurrentPassword(e.target.value);
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
  //

  return (
    <div className="page profile">
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="headers">
        <Header isLoggedIn={isLoggedIn} currentUser={currentUser} greeting={`Hi ${currentUser.firstName}  ${currentUser.lastName}, here you can change your settings..`} />
      </div>
      <form>
        <div className="content">
          <label htmlFor="email">Username - valid email</label>
          <div>
            <input
              type='email'
              placeholder='Enter your current email'
              value={userCurrentEmail}
              onChange={changeUserCurrentEmail}
            />
          </div>
          <label htmlFor="email">Change your conection email</label>
          <input
            type='email'
            placeholder='Bobby@Lassie.com'
            value={userNewEmail}
            onChange={changeUserNewEmail}
          />
          <label htmlFor="password">Password</label>
          <div>
          <input
            type='password'
            placeholder='Insert your current password'
            value={userCurrentPassword}
            onChange={changeUserCurrentPassword}
          />
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
          <button className="regular-button inside-form">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}
export default ProfileSettingsPage;