import LogInForm from "./log-in-form";
import SignUpForm from "./sign-up-form.jsx"

function LogInSignUpModal(props) {
  let { openCloseModalClick, action } = props;
      return(
      <>
        {(action==="log-in") ? <LogInForm  openCloseModalClick={openCloseModalClick} action={action} /> : <SignUpForm  openCloseModalClick={openCloseModalClick} action={action} /> }
        </>

    )

  
}

export default LogInSignUpModal;