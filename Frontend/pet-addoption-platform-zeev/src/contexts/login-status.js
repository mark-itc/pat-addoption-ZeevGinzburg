import { createContext } from 'react';

let  isLoggedIn = false;

function changeLogInStatus(loginStatus) {
    isLoggedIn = loginStatus;
    console.log(`isLoggedIn = ${isLoggedIn}`)
}


const isLoggedInContext = createContext(isLoggedIn);

export default isLoggedInContext;
export { changeLogInStatus };
