import { useState } from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import ProfileSettingsForm from "../components/profile-settings-form";
//need to change it to context ..

import '../UIkit/pages/page.css';
import '../UIkit/elements/form.css';

function ProfileSettingsPage(props) {
  const { isLoggedIn, currentUser, setCurrentUser } = props;


  return (
    <div className="page profile">
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="headers">
        <Header isLoggedIn={isLoggedIn} currentUser={currentUser} greeting={`Hi ${currentUser.firstName}  ${currentUser.lastName}, here you can change your settings..`} />
      </div>
      <ProfileSettingsForm isLoggedIn={isLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </div>
  )
}
export default ProfileSettingsPage;