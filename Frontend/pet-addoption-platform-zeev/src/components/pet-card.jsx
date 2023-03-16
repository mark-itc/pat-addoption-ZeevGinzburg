import { NavLink } from 'react-router-dom';

function PetCard(props) {
    const { pet, changeCurrentPet }  = props;
    const activeClassName = 'viewed';
    function changePetFromCard(){
        console.log(pet);
        changeCurrentPet(pet);
    }
    return(
        <div className="pet-card">
            <img/>
            <p className="pet's name">{pet.name}</p>
            <p className="pet's status">{pet.status}</p>
            {/* <p className="pet's image">{pet.image}</p> */}
            <button
            className={"regular-button inside-form"}
             onClick={changePetFromCard}
             >
             
            <NavLink 
                //now its a link to a general pats page - need to be dynamic path for every pet
                to='/pet-page'
                pet={pet}
                >
                See More..
                </NavLink>
            </button>

      </div>

    )
}

export default PetCard;