import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        here will be a  <a href=""> link to the search page</a>
      </nav>
      <header className="App-header">
        <p>
        welcome to 'Pet4U' your friendly pet adoption platform
        </p>
      </header>
      <section>
        <p>
          in this site, you can choose a pet, and to adopt it! 
        </p>
      </section>
        <button>
          login / signup
        </button>
      <div className="sign-up-modal">
          <form>
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
    </div>
  );
}

export default App;
