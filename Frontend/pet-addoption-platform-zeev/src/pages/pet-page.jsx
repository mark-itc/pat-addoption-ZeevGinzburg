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


function PetPage() {
     return (
    <div className="pet-page">
    <p>TEST TEST TEST!!</p>
    <p className="pet's Type">{pets[0].type}</p>
    <p className="pet's name">{pets[0].name}</p>
    <p className="pet's status">{pets[0].status}</p>
    <p className="pet's image">{pets[0].image}</p>
    <p className="pet's height">{pets[0].height}</p>
    <p className="pet's weight">{pets[0].weight}</p>
    <p className="pet's Color">{pets[0].color}</p>
    <p className="pet's Bio">{pets[0].bio}</p>
    <p className="pet's Hypoallergenic">{pets[0].Hypoallergenic}</p>
    <p className="pet's dietary restrictions">{pets[0].dietaryRestrictions}</p>
    <p className="pet's breed">{pets[0].breed}</p>
    <button>return the pet</button>
    <button>adopt the pet</button>
    <button>foster the pet</button>
    <button>save pet</button>
  </div>
  );

}

export default PetPage;