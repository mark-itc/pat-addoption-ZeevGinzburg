import './App.css';
import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";


import HomePage from './pages/homepage';
import ProfileSettingsPage from './pages/profile-settings-page';
import MyPetsPage from './pages/my-pets-page';
import PetPage from './pages/pet-page';
import SearchPage from './pages/search-page';
import AddPet from './pages/add-pet';
import Dashboard from './pages/dashboard';

import serverURLContext from "./contexts/url-context";

const logInPath = "/users/log-in"; //maybe need to be move




function App() {
  //need to be context!
  const defaultUser = {
    firstName: "Guest",
    lastName: ""
  }
  const serverURL = useContext(serverURLContext);


  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [currentUser, setCurrentUser] = useState(defaultUser);
  const [isAdmin, setIsAdmin] = useState(false);

  function changeLogInStatus(logInStatusForm) {
    setIsLoggedIn(logInStatusForm);
    console.log("logged in?" + isLoggedIn);

  }
  function changeAdminStatus(adminStatus) {
    setIsAdmin(adminStatus);
    console.log("is admin ?" + isAdmin);

  }

  async function logInUser(loggingUser) {
    const logInResult = await fetch(`${serverURL}${logInPath}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(loggingUser)
    }
    );
    const jsonLogInResult = await logInResult.json();
    console.log(jsonLogInResult);
    return jsonLogInResult;
    
  }
  ;
  


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage changeLogInStatus={changeLogInStatus} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn} currentUser={currentUser} logInUser={logInUser} changeAdminStatus={changeAdminStatus} isAdmin={isAdmin}   />
  },
  {
    path: "/profile-settings",
    element: <ProfileSettingsPage isLoggedIn={isLoggedIn} currentUser={currentUser} />
  },
  {
    //maybe need to changed the path to dynamic sith name?
    path: "/my-pets",
    element: <MyPetsPage isLoggedIn={isLoggedIn} currentUser={currentUser} />
  },
  {
    // need to be dynamic for each pet.. like with the companies in the stock assignment
    //maybe change the name?
    path: "/pet-page",
    element: <PetPage />
  },
  {
    path: "/search",
    element: <SearchPage isLoggedIn={isLoggedIn} />
  },
  {
    path: "/admin-add-pet",
    element: <AddPet isLoggedIn={isLoggedIn} />
  },
  {
    path: "/admin-dashboard",
    element: <Dashboard isLoggedIn={isLoggedIn} />
  },
]);

return (
  <>
    <RouterProvider router={router} />
  </>
);
}

export default App;
