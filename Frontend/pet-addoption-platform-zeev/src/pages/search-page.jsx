import { useContext } from "react";
import { useState } from "react";

import Navbar from "../components/navbar";
import SearchBar from "../components/search-bar";
import PetCard from "../components/pet-card";
import petsArrayContext from "../contexts/pets-array-context";

// it works but for some reason the advanced turn back just after two clicks.. 
function SearchPage() {
  const petsArray = useContext(petsArrayContext);


    return(
        
        <div className="search-page-temp">
                <Navbar/>
                <SearchBar/>
          <div className="search-results">
            <ul>
              <li><PetCard petsArray={petsArray} /> 1 </li>
              <li><PetCard petsArray={petsArray} /> 2 </li>
            </ul>
          </div>
          
        </div>


    );
}

export default SearchPage;