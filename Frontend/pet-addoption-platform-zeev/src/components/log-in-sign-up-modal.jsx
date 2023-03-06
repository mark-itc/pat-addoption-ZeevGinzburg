import LogInForm from "./log-in-form";
import SignUpForm from "./sign-up-form.jsx"



function LogInSignUpModal(props) {
  const { openCloseModalClick, action, changeLogInStatus, logInUser, changeAdminStatus, setCurrentUser } = props;
      return(
      <>
        {(action==="Log in!") ?
          <LogInForm  openCloseModalClick={openCloseModalClick} action={action} changeLogInStatus={changeLogInStatus} logInUser={logInUser} setCurrentUser={setCurrentUser}/>
         : <>
         {(action ==="Sign up!") ?
         <SignUpForm  openCloseModalClick={openCloseModalClick} action={action}  />
         : <LogInForm  openCloseModalClick={openCloseModalClick} action={action} changeLogInStatus={changeLogInStatus} logInUser={logInUser} setCurrentUser={setCurrentUser} changeAdminStatus={changeAdminStatus} />
         }
          </>
          }
        </>

    )

  
}

export default LogInSignUpModal;