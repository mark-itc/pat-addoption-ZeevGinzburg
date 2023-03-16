import { useContext } from "react";

import Navbar from "../components/navbar";
import currentPetContext from "../contexts/pets-array-context";
//need to make the pets array a context or props - and after that it need to be taken from the server...
import '../UIkit/pages/page.css';


function PetPage(props) {
  const { currentPet } = props;
  function temp() {
    console.log(currentPet);
  }
  return (
    <div className="page pet-page">
      <Navbar />
      <div>
        <h2>{`${currentPet.name}'s Page `} </h2>
        <div className="pet-features">
          <p className="pet's Type">{`Type: ${currentPet.type}`}</p>
          <p className="pet's name">{`Name: ${currentPet.name}`}</p>
          <p className="pet's status">{`Adoption Status: ${currentPet.status}`}</p>
          {/* <p className="pet's image">{currentPet.image}</p> */}
          <p className="pet's height">{`Heigt: ${currentPet.height}`}</p>
          <p className="pet's weight">{`Weight: ${currentPet.weight}`}</p>
          {/* <p className="pet's Color">{currentPet.color}</p> */}
          {/* <p className="pet's Bio">{currentPet.bio}</p> */}
          {/* <p className="pet's Hypoallergenic">{currentPet.Hypoallergenic}</p> */}
          {/* <p className="pet's dietary restrictions">{currentPet.dietaryRestrictions}</p> */}
          {/* <p className="pet's breed">{currentPet.breed}</p> */}
        </div>
        <div className="buttons-box">
          <button onClick={temp}>return the pet</button>
          <button>adopt the pet</button>
          <button>foster the pet</button>
          <button>save pet</button>
        </div>
      </div>
    </div>
  );

}

export default PetPage;