import './App.css';
import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";

import HomePage from './pages/homepage';
import ProfileSettingsPage from './pages/profile-settings-page';
import MyPetsPage from './pages/my-pets-page';



const pets = [
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
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/profile-settings",
      element: <ProfileSettingsPage />
    },
    {
      //maybe need to changed the path to dynamic sith name?
      path: "/my-pets",
      element: <MyPetsPage />
    },
  ]);
    
  return (
    <>
    <RouterProvider router={router} />

        
        <div className="pet-page">
          <p className="pet's Type">{pets[0].type}</p>
          <p className="pet's name">{pets[0].name}</p>
          <p className="pet's status">{pets[0].status}</p>
          <p className="pet's image">{pets[0].image}</p>
          <p className="pet's height">{pets[0].height}</p>
          <p className="pet's weight">{pets[0].weight}</p>
          <p className="pet's Color">{pets[0].color}</p>
          <p className="pet's Bio">{pets[0].bio}</p>
          <p className="pet's Hypoallergenic">{pets[0].Hypoallergenic}</p>
          <p className="pet's dietary restrictions">{pets[0].dietaryRestrictions}</p>
          <p className="pet's breed">{pets[0].breed}</p>
          <button>return the pet</button>
          <button>adopt the pet</button>
          <button>foster the pet</button>
          <button>save pet</button>
        </div>
        <div className="search-page-temp">
          <div className="search-bar">
            basic search / advanced search
            <h2>basic search</h2>
            <input type="search" name="" placeholder="insert type of animal"></input> Search bar...
            <h2>advanced search</h2>
            <label name="status" >Adoption Status</label>
            <input type="search" name="status" placeholder="Adoption Status - Foster / Adopted / Waitnig to adoption.."></input>
            <label name="height" >Pet's Height</label>
            <input type="search" name="height" placeholder="Height in cm"></input>
            <label name="weight" >Pet's Weight</label>
            <input type="search" name="weight" placeholder="Weight in Kg"></input>
            <label name="type" >Pet's Type</label>
            <input type="search" name="type" placeholder="insert type of animal"></input>
            <label name="name" >Pet's Name</label>
            <input type="search" name="name" placeholder="Bobby.."></input>
            
            <button>Search</button>
          </div>
          <div className="search-results">
            <ul>
              <li>* 1st result of search..*</li>
              <li>* 2nd result of search..*</li>
            </ul>
          </div>
          
        </div>
        <div className="admin-page-adding-pets">
          <form className="form-for-adding-pets">
          <h2>New Pet Details</h2>
            <label name="type" >Pet's Type</label>
            <input type="text" name="type" placeholder="insert type of animal"></input>
            <label name="name" >Pet's Name</label>
            <input type="text" name="name" placeholder="Bobby.."></input>
            <label name="status" >Adoption Status</label>
            <input type="text" name="status" placeholder="Adoption Status - Foster / Adopted / Waitnig to adoption.."></input>
            <p>How to add a picture??</p>
            <label name="height" >Pet's Height</label>
            <input type="number" name="height" placeholder="Height in cm"></input>
            <label name="weight" >Pet's Weight</label>
            <input type="number" name="weight" placeholder="Weight in Kg"></input>
            <button>Add Pet!</button>
          </form>
        </div>
        <div className="admin-page-dashboard">
          <h2>List of Users</h2>
          <h3>Admins</h3>
          <ul>
            <li>admin 1</li>
            <li>admin 2</li>
          </ul>
          <h3>Owners</h3>
          <ul>
            <li>owner 1</li>
            <li>owner 2</li>
          </ul>
          <h3>Pets</h3>
          <ul>
            <li>pet 1</li>
            <li>pet 2</li>
          </ul>
        </div>
        </>
    );
}

export default App;
