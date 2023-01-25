import Navbar from "../components/navbar";
import Header from "../components/header";
import PetCard from "../components/pet-card";

//need to change it to context ..
let isLoggedIn = false;
const userName = {
  FirstName: "**User First Name Temporary Hardcoded**",
  LastName: "**User Last Name Temporary Hardcoded**"
}

//need to make the pets array a context or props - and after that it need to be taken from the server...
const petsArray = [
    {
      name:"Bobby",
      image:"Nice image of Bobby",
      status: "foster",
      type: "Dog",
      height: 70,
      weight: 20,
      color: "Grey",
      bio: "A Good dog",
      hypoallergenic: true,
      dietaryRestrictions: "",
      breed: "Mixed",
      id: 1
  },
  
  ]

  let userHavePets = true;
  
function MyPetsPage() {
      return(
        <div className="my-pets-page-temp">
          <Navbar/>
          {userHavePets
          ? <Header page="my-pets-page-have" isLoggedIn = {isLoggedIn}userName = {userName}/> 
          : <Header page="my-pets-page-not-have" isLoggedIn = {isLoggedIn}userName = {userName}/> }
          <div className="card-container">
          <PetCard petsArray={petsArray}/>

          </div>
        </div>
    );

}

export default MyPetsPage;