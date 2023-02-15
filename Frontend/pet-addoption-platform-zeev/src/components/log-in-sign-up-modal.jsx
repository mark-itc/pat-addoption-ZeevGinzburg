import LogInForm from "./log-in-form";
import SignUpForm from "./sign-up-form.jsx"

function LogInSignUpModal(props) {
  let { openCloseModalClick, action, changeLogInStatus, changeCurrentUser } = props;
      return(
      <>
        {(action==="log-in") ?
          <LogInForm  openCloseModalClick={openCloseModalClick} action={action} changeLogInStatus={changeLogInStatus} changeCurrentUser={changeCurrentUser}/>
         : <SignUpForm  openCloseModalClick={openCloseModalClick} action={action} /> }
        </>

    )

  
}

export default LogInSignUpModal;