import { useState } from "react";

import Navbar from "../components/navbar";

import '../UIkit/pages/page.css';

const serverURL = "http://localhost:4000"; //need to conect it to the URL in the app.js
const addingPetPath = "/pets/add-pet";



async function addPetToDB(pet) {
  const addingPetResult = await fetch(`${serverURL}${addingPetPath}`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(pet)
  }
  );
  const jsonAddingPetResult = await addingPetResult.json();
  console.log(`${jsonAddingPetResult.name} add succesfuly!`);
}

function AddPet(props) {
  const {  isLoggedIn, isAdmin} = props;
  //maybe need to add another verification that logged and admin
  
  // How to add a picture??

  const [petType, setPetType] = useState("");
  const [petName, setPetName] = useState("");
  const [petStatus, setPetStatus] = useState("");
  const [petHeight, setPetHeight] = useState("");
  const [petWeight, setPetWeight] = useState("");

  const changePetType = (e) => {
    setPetType(e.target.value);
  };
  const changePetName = (e) => {
    setPetName(e.target.value);
  };
  const changePetStatus = (e) => {
    setPetStatus(e.target.value);
  };
  const changePetHeight = (e) => {
    setPetHeight(e.target.value);
  };
  const changePetWeight = (e) => {
    setPetWeight(e.target.value);
  };

  let petToAdd = {};

  function addPet(e) {
    e.preventDeafult();
    petToAdd.type = petType;
    petToAdd.name = petName;
    petToAdd.status = petStatus;
    petToAdd.height = petHeight;
    petToAdd.weight = petWeight;
  
    addPetToDB(petToAdd);

    //need to add a modal or message that pet added succes


  }
    return(
    <div className="page add-pet">
      <Navbar isLoggedIn={isLoggedIn} isAdmin={isAdmin}/>
      <form className="form-for-adding-pets">
        <h2>New Pet Details</h2>
            <label name="type" >Pet's Type</label>
            <input 
            type="text" name="type" placeholder="insert type of animal"
            value={petType}
            onChange={changePetType}
            ></input>
            <label name="name" >Pet's Name</label>
            <input
            type="text" name="name" placeholder="Bobby.."
            value={petName}
            onChange={changePetName}
            ></input>
            <label name="status" >Adoption Status</label>
            <input 
            type="text" name="status" placeholder="Adoption Status - Foster / Adopted / Waitnig to adoption.."
            value={petStatus}
            onChange={changePetStatus}
            ></input> 
            {/* {need to change it to drop list} */}
            <p>How to add a picture??</p>
            <label name="height" >Pet's Height</label>
            <input 
            type="number" name="height" placeholder="Height in cm"
            value={petHeight}
            onChange={changePetHeight}
            ></input>
            <label name="weight" >Pet's Weight</label>
            <input 
            type="number" name="weight" placeholder="Weight in Kg"
            value={petWeight}
            onChange={changePetWeight}
            ></input>
            <button className="regular-button inside-form" onClick={addPet}>Add Pet!</button>
          </form>
        </div>
    );
}
export default AddPet;