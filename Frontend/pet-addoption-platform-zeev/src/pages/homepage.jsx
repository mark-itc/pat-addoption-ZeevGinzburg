import OpenModalButton from "../components/open-modal-button";
import Navbar from "../components/navbar";
import SignUpModal from "../components/sign-up-modal";
import LogInModal from "../components/log-in-modal";
import Header from "../components/header";


//need to be context!
let isLoggedIn = false;
const userName = {
  FirstName: "**User First Name Temporary Hardcoded**",
  LastName: "**User Last Name Temporary Hardcoded**"
}
//need to be context!

let isModalOpened = false;
let action;
function HomePage() {
  let page = "homepage";


  return (
    <div className="home-page-temp">
      <Navbar />
      <Header isLoggedIn={isLoggedIn} userName={userName} page={page} />
      <OpenModalButton isModalOpened={isModalOpened} action="sign-up"/>
      <p>Already signed? </p>
      <OpenModalButton isModalOpened={isModalOpened} action="log-in"/>
      <SignUpModal/>
      <LogInModal/>
    </div>
      
    );
}

    export default HomePage;