import { useContext } from "react";
import { useState } from "react";

import Navbar from "../components/navbar";
import SearchBar from "../components/search-bar";
import PetCard from "../components/pet-card";
import petsArrayContext from "../contexts/pets-array-context";

// it works but for some reason the advanced turn back just after two clicks.. 
let isBasic = true;
function SearchPage() {
  const petsArray = useContext(petsArrayContext);
  const [searchType, setSearchType] = useState("basic")
  function changeSearch(e) {
    e.preventDefault();
    isBasic = !isBasic;
    if(!isBasic) {
      setSearchType("advanced");
    }
    else {
        setSearchType("basic");
      }

}

    return(
        
        <div className="search-page-temp">
                <Navbar/>
                <button className="change-search-type-button-" onClick={changeSearch}> change search type </button>
                <SearchBar searchType={searchType}/>
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