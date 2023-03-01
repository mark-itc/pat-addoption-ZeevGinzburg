import { NavLink } from 'react-router-dom';

function PetCard(props) {
    const { pet }  = props;
    const activeClassName = 'viewed';
    return(
        <div className="pet-card">
            <img/>
            <p className="pet's name">{pet.name}</p>
            <p className="pet's status">{pet.status}</p>
            {/* <p className="pet's image">{pet.image}</p> */}
            <button>
            <NavLink
                //now its a link to a general pats page - need to be dynamic path for every pet
                to='/pet-page'
                className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                }
                >
                See More..
                </NavLink>
            </button>

      </div>

    )
}

export default PetCard;