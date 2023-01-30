import OpenModalButton from "./open-modal-button";

function SignUpForm(props) {
  const { openCloseModalClick, action} = props;

    return(
        <div className="sign-up-modal">
        <form className="sign-up">
          <div className="sign-up-modal-content"> sign up modal
            <input type='email'
            placeholder='Enter your email'
            value=""
            onChange=""/>
            <input type='password'
            placeholder='Choose your password'
            value=""
            onChange=""/>
            <input type='password'
            placeholder='Please repeat your password'
            value=""
            onChange=""/>
            <input
            type='text'
            placeholder='Your First Name'
            value=""
            onChange=""
            />
            <input
            type='text'
            placeholder='Your Last Name'
            value=""
            onChange=""
            />
            <input
            type='tel'
            placeholder='Please enter your phone number'
            value=""
            onChange=""
            />
          </div>
        <button>
          sign me up!
        </button>
        </form>
        <OpenModalButton openCloseModalClick={openCloseModalClick} action="x"/>
      </div>

    )
}

export default SignUpForm;