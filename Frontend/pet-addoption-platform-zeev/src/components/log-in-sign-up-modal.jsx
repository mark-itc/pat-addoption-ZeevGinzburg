import LogInForm from "./log-in-form";
import SignUpForm from "./sign-up-form.jsx"
import LogInAdminForm from "./log-in-admin-form";


function LogInSignUpModal(props) {
  let { openCloseModalClick, action, changeLogInStatus, logInUser, changeAdminStatus, setCurrentUser } = props;
      return(
      <>
        {(action==="log-in") ?
          <LogInForm  openCloseModalClick={openCloseModalClick} action={action} changeLogInStatus={changeLogInStatus} logInUser={logInUser} setCurrentUser={setCurrentUser}/>
         : <>
         {(action ==="sign-up") ?
         <SignUpForm  openCloseModalClick={openCloseModalClick} action={action}  />
         : <LogInAdminForm  openCloseModalClick={openCloseModalClick} action={action} changeLogInStatus={changeLogInStatus} logInUser={logInUser} changeAdminStatus={changeAdminStatus} setCurrentUser={setCurrentUser} />}
          </>
          }
        </>

    )

  
}

export default LogInSignUpModal;