import { useContext } from "react";

import Navbar from "../components/navbar";
import Header from "../components/header";
import PetCard from "../components/pet-card";
import petsArrayContext from "../contexts/pets-array-context";

import '../UIkit/pages/page.css';


//need to make the pets array a context or props - and after that it need to be taken from the server...


  let userHavePets = false;
  
function MyPetsPage(props) {
  const { isLoggedIn, currentUser } = props;
  const greetingIfHavePets = `Hi ${currentUser.firstName}  ${currentUser.lastName} here is all your pets!`;
  const greetingIfNOtHavePets = `Hi ${currentUser.firstName}  ${currentUser.lastName} you still have no pets.. `;
  
  const petsArray = useContext(petsArrayContext);
      return(
        <div className="page my-pets">
          <Navbar isLoggedIn={isLoggedIn}/>
          <Header greeting={userHavePets ? greetingIfHavePets : greetingIfNOtHavePets } isLoggedIn = {isLoggedIn} currentUser = {currentUser} />
          <div className="card-container">
          {/* <PetCard petsArray={petsArray}/> */}

          </div>
        </div>
    );

}

export default MyPetsPage;