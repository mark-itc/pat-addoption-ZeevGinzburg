import { NavLink } from 'react-router-dom';

function PetCard(props) {
    const { petsArray }  = props;
    const activeClassName = 'viewed';
    return(
        <div className="pet-card">
            <img/>
            <p className="pet's name">{petsArray[0].name}</p>
            <p className="pet's status">{petsArray[0].status}</p>
            <p className="pet's image">{petsArray[0].image}</p>
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