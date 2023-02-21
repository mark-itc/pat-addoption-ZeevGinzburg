import { useState } from "react";

import OpenModalButton from "../components/open-modal-button";
import Navbar from "../components/navbar";
import LogInSignUpModal from "../components/log-in-sign-up-modal";
import Header from "../components/header";
import LogOutButton from "../components/log-out-button";




let action;
function HomePage(props) {
  const [openModal, setOpenModal] = useState(false);
  const {isLoggedIn, currentUser, changeLogInStatus, changeCurrentUser} = props;

  const openCloseModalClick = (actionFromButton) => {
      setOpenModal(!openModal);
      action = actionFromButton;
    }

  
  let page = "homepage";


  return (
    <div className="home-page-temp">
      <Navbar />
      <Header isLoggedIn={isLoggedIn} currentUser={currentUser} page={page} />
    {!isLoggedIn ? 
      <div>
        <OpenModalButton openCloseModalClick={openCloseModalClick} action="sign-up"/>
        <p>Already signed? </p>
        <OpenModalButton openCloseModalClick={openCloseModalClick} action="log-in"/>
      </div>
      : <div>
        <p>you are already logged in - log out?</p>
        <LogOutButton  changeLogInStatus={changeLogInStatus} changeCurrentUser={changeCurrentUser} action="log-out"/>
      </div>
      }
      {openModal && <LogInSignUpModal openCloseModalClick={openCloseModalClick} action={action} changeLogInStatus={changeLogInStatus} changeCurrentUser={changeCurrentUser}/>}
    </div>
      
    );
}

    export default HomePage;