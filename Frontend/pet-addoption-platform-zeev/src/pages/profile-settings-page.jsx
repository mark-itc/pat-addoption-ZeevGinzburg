import { useState } from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
//need to change it to context ..

import '../UIkit/pages/page.css';





function ProfileSettingsPage(props) {
  const {isLoggedIn, currentUser} = props; 
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
  
    return(
        <div className="page profile">
                <Navbar isLoggedIn={isLoggedIn}/>
                <Header  isLoggedIn={isLoggedIn} currentUser={currentUser} greeting={`Hi ${currentUser.firstName}  ${currentUser.lastName} here you can change your settings..`}/>


    <form>
          <div className="profile-setting-page-content">
            <input 
              type='email'
              placeholder='Enter your current email'
              value={userCurrentEmail}
              onChange={changeUserCurrentEmail}
            />
            
            <input
              type='email'
              placeholder='Enter a new email'
              value={userNewEmail}
              onChange={changeUserNewEmail}
            />
            <input
              type='password'
              placeholder='Enter your current password'
              value={userCurrentPassword}
              onChange={changeUserCurrentPassword}
            />
            <input
              type='password'
              placeholder='Enter a new password'
              value={userNewPassword}
              onChange={changeUserNewPassword}
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
            <input
              type='textarea'
              placeholder='You can add a short Bio here'
              value={userBio}
              onChange={changeUserBio}
            />
          </div>
        <button>
          Save Changes
          </button>
        </form>
      </div>
    )
}
export default ProfileSettingsPage;