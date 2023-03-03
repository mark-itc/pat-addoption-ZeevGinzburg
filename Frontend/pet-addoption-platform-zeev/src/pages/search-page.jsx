import { useContext } from "react";
import { useState } from "react";

import Navbar from "../components/navbar";
import SearchBar from "../components/search-bar";
import PetCard from "../components/pet-card";

// it works but for some reason the advanced turn back just after two clicks.. 
function SearchPage() {
  const [searchResultArray, setSearchResultArray] = useState([]);

  const changeResultsArray = (results) => {
    setSearchResultArray(results);
    console.log(searchResultArray);
  }
  return (
  <>
    <div className="search-page-temp">
      <Navbar />
      <SearchBar changeResultsArray={changeResultsArray} />
        <div className="search-results-container">
          {searchResultArray.map((pet) => (
            <PetCard pet={pet} />))}



        </div>
    </div>
  </>
);
}

export default SearchPage;