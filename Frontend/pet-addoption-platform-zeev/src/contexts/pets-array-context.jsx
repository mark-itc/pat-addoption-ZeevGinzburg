import { createContext } from 'react';

const  petsArray = [
    {
      name:"Im a dog from context",
      image:"Nice image of Context",
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
  
  ];

  const petsArrayContext = createContext(petsArray);

  export default petsArrayContext;
