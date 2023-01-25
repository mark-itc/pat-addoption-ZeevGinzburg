function PetCard(props) {
    const { petsArray }  = props;
    return(
        <div className="pet-card">
            <img/>
            <p className="pet's name">{petsArray[0].name}</p>
            <p className="pet's status">{petsArray[0].status}</p>
            <p className="pet's image">{petsArray[0].image}</p>
            <button>See More</button>
      </div>

    )
}

export default PetCard;