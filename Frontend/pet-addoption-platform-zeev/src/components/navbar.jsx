import { NavLink } from 'react-router-dom';

function Navbar(props) {
  const { isLoggedIn, isAdmin } = props;

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          {isLoggedIn ?
            <NavLink
              to='/profile-settings'
            >
              Profile
            </NavLink>
            :
            <></>}
        </li>
        <li>
          {isLoggedIn ?
            <NavLink
              to='/my-pets'
            >
              My Pets
            </NavLink>
            :
            <></>}
        </li>
        <li className='admin-nav-link'
          style={isAdmin ?
            { visibility: 'visible' } :
            { visibility: 'hidden' }}>
          <NavLink
            to='/admin-add-pet'
          >
            Add Pet
          </NavLink>
        </li>
        <li className='admin-nav-link'
          style={isAdmin ? { visibility: 'visible' } :
            { visibility: 'hidden' }}>
          <NavLink
            to='/admin-dashboard'
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/search'
          >
            Search
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
