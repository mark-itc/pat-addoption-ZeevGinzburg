import OpenModalButton from "../components/open-modal-button";
import Navbar from "../components/navbar";
import SignUpModal from "../components/sign-up-modal";
import LogInModal from "../components/log-in-modal";


let isLoggedIn = false;
const userFirstName = "**User First Name Temporary Hardcoded**";
const userLastName = "**User Last Name Temporary Hardcoded**";
let isModalOpened = false;
let action;
function HomePage() {
    return (
<div className="home-page-temp">
      <Navbar/>

      <header className="login-header">
        <p>{`welcome ${isLoggedIn ? userFirstName : ""}  ${isLoggedIn ?userLastName : ""}to 'Pet4U' your friendly pet adoption platform`}
        </p>
      </header>
      <div className="explain">
        <p>
          in this site, you can choose a pet, and to adopt it! 
        </p>
      </div>
      <OpenModalButton isModalOpened={isModalOpened} action="sign-up"/>
        <p>Already signed? </p>
      <OpenModalButton isModalOpened={isModalOpened} action="log-in"/>
      <SignUpModal/>
      <LogInModal/>
 
 


        </div>
      
    );
}

    export default HomePage;