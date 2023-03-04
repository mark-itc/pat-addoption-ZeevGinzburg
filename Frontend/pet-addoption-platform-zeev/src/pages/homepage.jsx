import { useState } from "react";

import OpenModalButton from "../components/open-modal-button";
import Navbar from "../components/navbar";
import LogInSignUpModal from "../components/log-in-sign-up-modal";
import Header from "../components/header";
import LogOutButton from "../components/log-out-button";

import '../UIkit/pages/page.css';
import '../UIkit/elements/buttons.css';
import dogImage from '../UIkit/images/lassie2.jpg'




let action;
function HomePage(props) {
  const [openModal, setOpenModal] = useState(false);
  const { isLoggedIn, currentUser, changeLogInStatus, logInUser, changeAdminStatus, isAdmin, isPasswordCorrect, setCurrentUser } = props;

  const openCloseModalClick = (actionFromButton) => {
    setOpenModal(!openModal);
    action = actionFromButton;
    console.log(openModal);
  }


  let page = "homepage";


  return (
    <div className="page home">
      <Navbar isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <section className="left-side">
        <div className="headers">
          <h1 className="main-header">Lassie</h1>
          <h2 className="sub-header">
              Finding a home for pets, together
          </h2>
           <Header greeting={isLoggedIn ? `Hi ${currentUser.firstName} ${currentUser.lastName}, what are you want to do?` : `Hello guest, welcome to our community - please sign in!`} />
        </div>
        {!isLoggedIn ?
          <div className="registration-box">
            <div className="sign-up-log-in-box" >
              <OpenModalButton openCloseModalClick={openCloseModalClick} action="sign-up" />
              <OpenModalButton openCloseModalClick={openCloseModalClick} question="Already registered?" action="log-in" />
            </div>
          </div>
          : <div>

            <LogOutButton changeLogInStatus={changeLogInStatus} action="log-out" />
          </div>
        }
      </section>
      <section className="right-side">
        <img src={dogImage} alt="doggie" height="300" widtn="300" />
            <div className="admin-log-in-box">
              <OpenModalButton openCloseModalClick={openCloseModalClick} action="log-in-admin" />
            </div>
      </section>
      {openModal && <LogInSignUpModal openCloseModalClick={openCloseModalClick} action={action} changeLogInStatus={changeLogInStatus} logInUser={logInUser} changeAdminStatus={changeAdminStatus}
        setCurrentUser={setCurrentUser} />}
    </div>

  );
}

export default HomePage;