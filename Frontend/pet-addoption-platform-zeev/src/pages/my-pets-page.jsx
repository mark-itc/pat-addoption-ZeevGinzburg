//need to make the pets array a context or props - and after that it need to be taken from the server...
const pets = [
    {
      name:"Bobby",
      image:"Nice image of Bobby",
      status: "foster",
      type: "Dog",
      height: 70,
      weight: 20,
      color: "Grey",
      bio: "A Good dog",
      hypoallergenic: true,
      dietaryRestrictions: "",
      breed: "Mixed",
      id: 1
  },
  
  ]
  
function MyPetsPage() {
    return(
        <div className="my-pets-page-temp">
          <p className="if-no-pets">you currently do not own or foster any pets</p>
          <div className="card-container">
            <div className="pet-card">
              <img/>
              <p className="pet's name">{pets[0].name}</p>
              <p className="pet's status">{pets[0].status}</p>
              <p className="pet's image">{pets[0].image}</p>
              <button>See More</button>
            </div>
          </div>
        </div>
    );

}

export default MyPetsPage;