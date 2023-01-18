import './App.css';
const userFirstName = "**User First Name Temporary Hardcoded**";
const userLastName = "**User Last Name Temporary Hardcoded**";
const pets = [
  {
    name:"Bobby",
    image:"Nice image of Bobby",
    status: "foster",
    type: "Dog",
    height: 70,
    weight: 20,
    color: "Grey",
    bio: "A Good dog",
    hypoallergenic: true,
    dietaryRestrictions: "",
    breed: "Mixed",
    id: 1
},

]
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
        
        <div className="profile-settings-page-temp">
          <nav>
            <ul>
              <li className="link to a page">My pets</li>
              <li className="link to a page">homepage</li>
            </ul>
        here will be a  <a href=""> link to the search page ?as a button?</a>
        </nav>
      <header className="profile-header">
        <p>{`Hi ${userFirstName}  ${userLastName}here you can change your settings..`}
        </p>
      </header>
      <form>
            <div className="profile-setting-page-content">
              <input type='email'
              placeholder='Enter your email'
              value=""
              onChange=""/>
              <input type='password'
              placeholder='Choose your password'
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
              <input
              type='textarea'
              placeholder='You can add a short Bio here'
              value=""
              onChange=""
              />
            </div>
          <button>
            Save Changes
            </button>
          </form>
        </div>
        <div className="my-pets-page-temp">
          <p className="if-no-pets">you currently do not own or foster any pets</p>
          <div className="card-container">
            <div className="pet-card">
              <img/>
              <p className="pet's name">{pets[0].name}</p>
              <p className="pet's status">{pets[0].status}</p>
              <p className="pet's image">{pets[0].image}</p>
              <button>See More</button>
            </div>
          </div>
        </div>
        <div className="pet-page">
          <p className="pet's Type">{pets[0].type}</p>
          <p className="pet's name">{pets[0].name}</p>
          <p className="pet's status">{pets[0].status}</p>
          <p className="pet's image">{pets[0].image}</p>
          <p className="pet's height">{pets[0].height}</p>
          <p className="pet's weight">{pets[0].weight}</p>
          <p className="pet's Color">{pets[0].color}</p>
          <p className="pet's Bio">{pets[0].bio}</p>
          <p className="pet's Hypoallergenic">{pets[0].Hypoallergenic}</p>
          <p className="pet's dietary restrictions">{pets[0].dietaryRestrictions}</p>
          <p className="pet's breed">{pets[0].breed}</p>
          <button>return the pet</button>
          <button>adopt the pet</button>
          <button>foster the pet</button>
          <button>save pet</button>
        </div>
        <div className="search-page-temp">
          <div className="search-bar">
            basic search / advanced search
            <h2>basic search</h2>
            <input type="search" name="" placeholder="insert type of animal"></input> Search bar...
            <h2>advanced search</h2>
            <label name="status" >Adoption Status</label>
            <input type="search" name="status" placeholder="Adoption Status - Foster / Adopted / Waitnig to adoption.."></input>
            <label name="height" >Pet's Height</label>
            <input type="search" name="height" placeholder="Height in cm"></input>
            <label name="weight" >Pet's Weight</label>
            <input type="search" name="weight" placeholder="Weight in Kg"></input>
            <label name="type" >Pet's Type</label>
            <input type="search" name="type" placeholder="insert type of animal"></input>
            <label name="name" >Pet's Name</label>
            <input type="search" name="name" placeholder="Bobby.."></input>
            
            <button>Search</button>
          </div>
          <div className="search-results">
            <ul>
              <li>* 1st result of search..*</li>
              <li>* 2nd result of search..*</li>
            </ul>
          </div>
          
        </div>
        <div className="admin-page-adding-pets">
          <form className="form-for-adding-pets">
          <h2>New Pet Details</h2>
            <label name="type" >Pet's Type</label>
            <input type="text" name="type" placeholder="insert type of animal"></input>
            <label name="name" >Pet's Name</label>
            <input type="text" name="name" placeholder="Bobby.."></input>
            <label name="status" >Adoption Status</label>
            <input type="text" name="status" placeholder="Adoption Status - Foster / Adopted / Waitnig to adoption.."></input>
            <p>How to add a picture??</p>
            <label name="height" >Pet's Height</label>
            <input type="number" name="height" placeholder="Height in cm"></input>
            <label name="weight" >Pet's Weight</label>
            <input type="number" name="weight" placeholder="Weight in Kg"></input>
            <button>Add Pet!</button>
          </form>
        </div>
        <div className="admin-page-dashboard">
          <h2>List of Users</h2>
          <h3>Admins</h3>
          <ul>
            <li>admin 1</li>
            <li>admin 2</li>
          </ul>
          <h3>Owners</h3>
          <ul>
            <li>owner 1</li>
            <li>owner 2</li>
          </ul>
          <h3>Pets</h3>
          <ul>
            <li>pet 1</li>
            <li>pet 2</li>
          </ul>
        </div>
    </div>
  );
}

export default App;
