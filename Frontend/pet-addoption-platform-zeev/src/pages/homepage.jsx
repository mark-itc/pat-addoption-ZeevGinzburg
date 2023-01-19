const userFirstName = "**User First Name Temporary Hardcoded**";
const userLastName = "**User Last Name Temporary Hardcoded**";

function HomePage() {
    return (
<div className="home-page-temp">
      <nav>
        here will be a  <a href=""> link to the search page</a>
      </nav>
      <header className="App-header">
        <p>
        welcome to 'Pet4U' your friendly pet adoption platform
        </p>
      </header>
      <div className="explain">
        <p>
          in this site, you can choose a pet, and to adopt it! 
        </p>
      </div>
        <button>
          login / signup
        </button>
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
            sign me in!
          </button>
          </form>
        </div>
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
        <div className="homepage-temp">
          <nav>
            <ul>
              <li className="link to a page">My pets</li>
              <li className="link to a page">Profile Settings</li>
            </ul>
        here will be a  <a href=""> link to the search page ?as a button?</a>
        </nav>
      <header className="login-header">
        <p>{`welcome ${userFirstName}  ${userLastName}to 'Pet4U' your friendly pet adoption platform`}
        </p>
      </header>
        </div>
        </div>
    );
}

    export default HomePage;