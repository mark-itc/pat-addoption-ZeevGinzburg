function LogInSignUpModal(props) {
  let { openModal, action } = props;
  console.log(openModal,action )

  if(openModal) {
    if (action==="log-in"){

      return(
        <div className="log-in-modal">
        <form>
          <div className="log-in-modal-content">login modal
            <input type='email'
            placeholder='Enter your email'
            value=""
            onChange=""/>
            <input type='password'
            placeholder='Emter your password'
            value=""
            onChange=""/>
          </div>
          <button>
          log in!
          </button>
        </form>
    </div>

    )
  }
  else if (action==="sign-up") {
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
      </div>
  )
  }
  }
}

export default LogInSignUpModal;