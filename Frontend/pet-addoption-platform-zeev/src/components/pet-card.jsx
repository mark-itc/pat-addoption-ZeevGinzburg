import { NavLink } from 'react-router-dom';

function PetCard(props) {
    const { pet, changeCurrentPet } = props;
    function changePetFromCard() {
        changeCurrentPet(pet);
    }
    return (
        <div className="pet-card">
            {/* Image of the pet.. */}
            <p className="pet's name">{pet.name}</p>
            <p className="pet's status">{pet.status}</p>
            <button
                className={"regular-button inside-form"}
                onClick={changePetFromCard}
            >
                <NavLink
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