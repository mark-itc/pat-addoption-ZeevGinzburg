import { useState } from "react";

import OpenModalButton from "../components/open-modal-button";
import Navbar from "../components/navbar";
import LogInSignUpModal from "../components/log-in-sign-up-modal";
import Header from "../components/header";


//need to be context!
let isLoggedIn = false;
const userName = {
  FirstName: "**User First Name Temporary Hardcoded**",
  LastName: "**User Last Name Temporary Hardcoded**"
}
//need to be context!

let action;
function HomePage() {
  const [openModal, setOpenModal] = useState(false);
  
  const openCloseModalClick = (actionFromButton) => {
      setOpenModal(true);
      action = actionFromButton;
      // console.log(openModal)
      // console.log(action);
    }

  
  let page = "homepage";


  return (
    <div className="home-page-temp">
      <Navbar />
      <Header isLoggedIn={isLoggedIn} userName={userName} page={page} />
      <OpenModalButton openCloseModalClick={openCloseModalClick} action="sign-up"/>
      <p>Already signed? </p>
      <OpenModalButton openCloseModalClick={openCloseModalClick} action="log-in"/>
      {openModal && <LogInSignUpModal action={action}/>}
    </div>
      
    );
}

    export default HomePage;