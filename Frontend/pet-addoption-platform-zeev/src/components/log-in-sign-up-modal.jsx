import LogInForm from "./log-in-form";
import SignUpForm from "./sign-up-form.jsx"

function LogInSignUpModal(props) {
  let { action } = props;
      return(
      <>
        {(action==="log-in") ? <LogInForm /> : <SignUpForm /> }
        </>

    )

  
}

export default LogInSignUpModal;