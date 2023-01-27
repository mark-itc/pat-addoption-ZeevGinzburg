function LogInForm() {
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
                <div>x</div>
            </div>


    )
}

export default LogInForm;