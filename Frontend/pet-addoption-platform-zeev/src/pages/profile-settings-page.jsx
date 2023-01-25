import Navbar from "../components/navbar";
import Header from "../components/header";
//need to change it to context ..
let isLoggedIn = false;
const userName = {
  FirstName: "**User First Name Temporary Hardcoded**",
  LastName: "**User Last Name Temporary Hardcoded**"
}


function ProfileSettingsPage() {
  let page = "profile-settings-page";
  
    return(
        <div className="profile-settings-page-temp">
                <Navbar/>
                <Header  isLoggedIn={isLoggedIn} userName={userName} page={page}/>


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
    )
}
export default ProfileSettingsPage;