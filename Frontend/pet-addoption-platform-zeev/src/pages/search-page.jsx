import { useContext } from "react";
import { useState } from "react";

import Navbar from "../components/navbar";
import SearchBar from "../components/search-bar";
import PetCard from "../components/pet-card";

import '../UIkit/pages/page.css';
import '../UIkit/elements/form.css';
import '../UIkit/elements/pet-card.css';

// it works but for some reason the advanced turn back just after two clicks.. 
function SearchPage(props) {
  const {isLoggedIn, changeCurrentPet} = props;
  const [searchResultArray, setSearchResultArray] = useState([]);

  const changeResultsArray = (results) => {
    setSearchResultArray(results);
    console.log(searchResultArray);
  }
  return (
  <>
    <div className="page search">
    <Navbar isLoggedIn={isLoggedIn} />
      <SearchBar changeResultsArray={changeResultsArray} />
        <div className="search-results-container">
          {searchResultArray.map((pet) => (
            <PetCard pet={pet} changeCurrentPet={changeCurrentPet}/>))}
        </div>
    </div>
  </>
);
}

export default SearchPage;