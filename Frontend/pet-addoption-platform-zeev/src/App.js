import './App.css';
import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";

import HomePage from './pages/homepage';
import ProfileSettingsPage from './pages/profile-settings-page';
import MyPetsPage from './pages/my-pets-page';
import PetPage from './pages/pet-page';
import SearchPage from './pages/search-page';
import AddPet from './pages/add-pet';
import Dashboard from './pages/dashboard';
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
    {
      // need to be dynamic for each pet.. like with the companies in the stock assignment
      //maybe change the name?
      path: "/pet-page",
      element: <PetPage />
    },
    {
      path: "/search",
      element: <SearchPage />
    },
    {
      path: "/admin-add-pet",
      element: <AddPet />
    },
    {
      path: "/admin-dashboard",
      element: <Dashboard />
    },
  ]);
    
  return (
    <>
    <RouterProvider router={router} />
    </>
    );
}

export default App;
