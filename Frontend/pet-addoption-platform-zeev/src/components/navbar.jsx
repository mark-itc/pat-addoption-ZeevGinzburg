import { NavLink } from 'react-router-dom';

function Navbar () {
    const activeClassName = 'viewed'
  
    return (
      <nav className='Navbar'>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/profile-settings'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/my-pets'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              My Pets
            </NavLink>
          </li>
          <li>
            <NavLink
            //temporary link - need to be linked from my pets / search page
              to='/pet-page'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Pet Page
            </NavLink>
          </li>
          <li>
            <NavLink
            //temporary - need to replace with search bar
              to='/search'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/admin-add-pet'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Add Pet
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/admin-dashboard'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
  
  export default Navbar;
  