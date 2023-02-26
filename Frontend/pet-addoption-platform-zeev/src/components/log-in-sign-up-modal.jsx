import LogInForm from "./log-in-form";
import SignUpForm from "./sign-up-form.jsx"
import LogInAdminForm from "./log-in-admin-form";

function LogInSignUpModal(props) {
  let { openCloseModalClick, action, changeLogInStatus, logInUser, changeAdminStatus, serverURL } = props;
      return(
      <>
        {(action==="log-in") ?
          <LogInForm  openCloseModalClick={openCloseModalClick} action={action} changeLogInStatus={changeLogInStatus} logInUser={logInUser}/>
         : <>
         {(action ==="sign-up") ?
         <SignUpForm  openCloseModalClick={openCloseModalClick} action={action}  />
         : <LogInAdminForm  openCloseModalClick={openCloseModalClick} action={action} changeLogInStatus={changeLogInStatus} logInUser={logInUser} changeAdminStatus={changeAdminStatus}/>}
          </>
          }
        </>

    )

  
}

export default LogInSignUpModal;