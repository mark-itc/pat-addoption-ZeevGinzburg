import { useContext } from "react";

import Navbar from "../components/navbar";
import petsArrayContext from "../contexts/pets-array-context";
//need to make the pets array a context or props - and after that it need to be taken from the server...


function PetPage() {
  const petsArray = useContext(petsArrayContext);
     return (
    <div className="pet-page">
      <Navbar/>
      <h2>{`${petsArray[0].name}'s Page `} </h2>
      <p className="pet's Type">{petsArray[0].type}</p>
      <p className="pet's name">{petsArray[0].name}</p>
      <p className="pet's status">{petsArray[0].status}</p>
      <p className="pet's image">{petsArray[0].image}</p>
      <p className="pet's height">{petsArray[0].height}</p>
      <p className="pet's weight">{petsArray[0].weight}</p>
      <p className="pet's Color">{petsArray[0].color}</p>
      <p className="pet's Bio">{petsArray[0].bio}</p>
      <p className="pet's Hypoallergenic">{petsArray[0].Hypoallergenic}</p>
      <p className="pet's dietary restrictions">{petsArray[0].dietaryRestrictions}</p>
      <p className="pet's breed">{petsArray[0].breed}</p>
      <button>return the pet</button>
      <button>adopt the pet</button>
      <button>foster the pet</button>
      <button>save pet</button>
  </div>
  );

}

export default PetPage;