import { useState } from "react";
import { useContext } from "react";

import serverURLContext from "../contexts/url-context";


let isBasic = true;

function SearchBar(props) {
    const serverURL = useContext(serverURLContext);
    let { changeResultsArray } = props;

    const [searchType, setSearchType] = useState("basic")

    const [petTypeSearch, setPetTypeSearch] = useState("");
    const [petStatusSearch, setPetStatusSearch] = useState("");
    const [petHeightSearch, setPetHeightSearch] = useState("");
    const [petWeightSearch, setPetWeightSearch] = useState("");
    const [petNameSearch, setPetNameSearch] = useState("");

    const searchPetPath = "/pets/search";



    const changePetTypeSearch = (e) => {
        setPetTypeSearch(e.target.value);
    }
    const changePetStatusSearch = (e) => {
        setPetStatusSearch(e.target.value);
    }
    const changePetHeightSearch = (e) => {
        setPetHeightSearch(e.target.value);
    }
    const changePetWeightSearch = (e) => {
        setPetWeightSearch(e.target.value);
    }
    const changePetNameSearch = (e) => {
        setPetNameSearch(e.target.value);
    }

    function changeSearch(e) {
        e.preventDefault();
        isBasic = !isBasic;
        if (!isBasic) {
            setSearchType("advanced");
        }
        else {
            setSearchType("basic");
        }
        setPetTypeSearch("");
        setPetStatusSearch("");
        setPetHeightSearch("");
        setPetWeightSearch("");
        setPetNameSearch("");
    }


    let currentPetForSearch = {};

    //think search func need to be in the parent to show the results..
    async function searchFunction() {
        currentPetForSearch.type = petTypeSearch;
        currentPetForSearch.name = petNameSearch;
        currentPetForSearch.status = petStatusSearch;
        currentPetForSearch.height = petHeightSearch;
        currentPetForSearch.weight = petWeightSearch;
        currentPetForSearch.searchType = searchType;

        // http://example.com/api/users?id=4&token=sdfa3&geo=us


        if (searchType === "basic") {
            const searchURL = `${serverURL}${searchPetPath}?type=${petTypeSearch}&searchType=${searchType}`;
            const searchResultsArrayFromDB = await fetch(searchURL);
            const jsonSearchResultArray = await searchResultsArrayFromDB.json();
            // console.log(jsonSearchResultArray);
            changeResultsArray(jsonSearchResultArray);

        }
        if (searchType === "advanced") {
            const searchURL = `${serverURL}${searchPetPath}?type=${petTypeSearch}&name=${petNameSearch}&status=${petStatusSearch}&height=${petHeightSearch}&weight=${petWeightSearch}&searchType=${searchType}`;
            const searchResultsArrayFromDB = await fetch(searchURL);
            const jsonSearchResultArray = await searchResultsArrayFromDB.json();
            // console.log(jsonSearchResultArray);

            changeResultsArray(jsonSearchResultArray);

        }
    }
        return (
            <div className="search-bar">
                <button className="change-search-type-button-" onClick={changeSearch}> change search type </button>

                {(searchType === "basic") ?
                    <div>
                        <h2>basic search</h2>
                        <input type="search" name="" placeholder="insert type of animal"
                            value={petTypeSearch} //
                            onChange={changePetTypeSearch} //
                        ></input>
                    </div>
                    : <div>
                        <h2>advanced search</h2>
                        <label name="status" >Adoption Status</label>
                        <input
                            type="search" name="status" placeholder="Adoption Status - Foster / Adopted / Waitnig to adoption.."
                            value={petStatusSearch} //
                            onChange={changePetStatusSearch} //

                        ></input>
                        <label name="height" >Pet's Height</label>
                        <input type="search" name="height" placeholder="Height in cm"

                            value={petHeightSearch} //
                            onChange={changePetHeightSearch} //
                        ></input>
                        <label name="weight" >Pet's Weight</label>
                        <input type="search" name="weight" placeholder="Weight in Kg"

                            value={petWeightSearch} //
                            onChange={changePetWeightSearch} //
                        ></input>
                        <label name="type" >Pet's Type</label>
                        <input type="search" name="type" placeholder="insert type of animal"

                            value={petTypeSearch} //
                            onChange={changePetTypeSearch} //
                        ></input>
                        <label name="name" >Pet's Name</label>
                        <input type="search" name="name" placeholder="Bobby.."

                            value={petNameSearch} //
                            onChange={changePetNameSearch} //
                        ></input>
                    </div>
                }
                <button
                    onClick={searchFunction}
                //   disabled={ userEmail.length == 0 || userPassword.length == 0 || userPasswordCheck.length == 0 || userFirstName.length == 0 || userLastName.length == 0 || userPhoneNumber.length == 0 }

                >Search</button>

            </div>

        )
    }

    export default SearchBar;