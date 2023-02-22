import './App.css';
import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import { useState } from "react";

import HomePage from './pages/homepage';
import ProfileSettingsPage from './pages/profile-settings-page';
import MyPetsPage from './pages/my-pets-page';
import PetPage from './pages/pet-page';
import SearchPage from './pages/search-page';
import AddPet from './pages/add-pet';
import Dashboard from './pages/dashboard';

const serverURL = "http://localhost:4000";
const signUpPath = "/users/sign-up";
const logInPath = "/users/log-in";

async function addUserToDB(currentUser) {
  fetch(`${serverURL}${signUpPath}`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(currentUser)
  }
  )
}


function App() {
  //need to be context!
  const defaultUser = {
    firstName: "Guest",
    lastName: ""
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false); //change back to false!!
  const [currentUser, setCurrentUser] = useState(defaultUser);

  function changeLogInStatus(logInStatusForm) {
    setIsLoggedIn(logInStatusForm);
    console.log("logged in?" + isLoggedIn);

  }

  async function logInUser(loggingUser) {
    const logInResult = await fetch(`${serverURL}${logInPath}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(loggingUser)
    }
    );
    const jsonLogInResult = await logInResult.json();
    setIsLoggedIn(true);
    setCurrentUser(jsonLogInResult);
    console.log(currentUser);

  }
;

//     setCurrentUser(logInUser(loggedInUser));
//   }

// }

//need to be context!

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage changeLogInStatus={changeLogInStatus} isLoggedIn={isLoggedIn} currentUser={currentUser} addUserToDB={addUserToDB} logInUser={logInUser} />
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
