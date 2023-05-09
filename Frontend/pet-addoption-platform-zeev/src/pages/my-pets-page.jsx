import Navbar from "../components/navbar";
import Header from "../components/header";
// import PetCard from "../components/pet-card";

import '../UIkit/pages/page.css';


//there is still no conection between user and pet - so you can't take the user's pets list from the server...

let userHavePets = false;

// after the adoption connection between user and pet will establish, here wll be a function to get the list of pets from the server and map it to cards.
function MyPetsPage(props) {
  const { isLoggedIn, currentUser } = props;
  const greetingIfHavePets = `Hi ${currentUser.firstName}  ${currentUser.lastName} here is all your pets!`;
  const greetingIfNOtHavePets = `Hi ${currentUser.firstName}  ${currentUser.lastName} you still have no pets.. `;

  return (
    <div className="page my-pets">
      <Navbar isLoggedIn={isLoggedIn} />
      <Header greeting={userHavePets ? greetingIfHavePets : greetingIfNOtHavePets} isLoggedIn={isLoggedIn} currentUser={currentUser} />
      <div className="card-container">
        {/* <PetCard petsArray={petsArray}/> */}

      </div>
    </div>
  );

}

export default MyPetsPage;