import { NavLink } from 'react-router-dom';

function Navbar(props) {
  const { isLoggedIn, isAdmin } = props;
  const activeClassName = 'viewed';

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
            {isLoggedIn ?
              <NavLink
                to='/profile-settings'
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
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
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              My Pets
            </NavLink>
          :
          <></>}
          </li>
          {/* <li>
            <NavLink
            //temporary link - need to be linked from my pets / search page
              to='/pet-page'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Pet Page
            </NavLink>
          </li> */}
          <li className='admin-nav-link' style={isAdmin ? { visibility: 'visible' } : { visibility: 'hidden' }}>
            <NavLink
              to='/admin-add-pet'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Add Pet
            </NavLink>
          </li>
          <li className='admin-nav-link' style={isAdmin ? { visibility: 'visible' } : { visibility: 'hidden' }}>
            <NavLink
              to='/admin-dashboard'
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Dashboard
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
        </ul>
    </nav>
  )
}

export default Navbar;
