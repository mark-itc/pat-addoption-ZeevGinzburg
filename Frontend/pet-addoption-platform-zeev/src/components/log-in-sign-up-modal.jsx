import LogInForm from "./log-in-form";
import SignUpForm from "./sign-up-form.jsx"

function LogInSignUpModal(props) {
  let { openCloseModalClick, action, changeLogInStatus, changeCurrentUser, addUserToDB, logInUser } = props;
      return(
      <>
        {(action==="log-in") ?
          <LogInForm  openCloseModalClick={openCloseModalClick} action={action} changeLogInStatus={changeLogInStatus} changeCurrentUser={changeCurrentUser} logInUser={logInUser}/>
         : <SignUpForm  openCloseModalClick={openCloseModalClick} action={action} addUserToDB={addUserToDB}/> }
        </>

    )

  
}

export default LogInSignUpModal;