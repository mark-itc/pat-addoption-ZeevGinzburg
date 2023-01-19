//need to change it to context ..

const userFirstName = "**User First Name Temporary Hardcoded**";
const userLastName = "**User Last Name Temporary Hardcoded**";

function ProfileSettingsPage() {
    return(
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
    )
}
export default ProfileSettingsPage;