import OpenModalButton from "./open-modal-button";

function LogInForm(props) {
    const { openCloseModalClick, action} = props;
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
                <OpenModalButton openCloseModalClick={openCloseModalClick} action="x"/>
            </div>


    )
}

export default LogInForm;