import { useState } from "react";
import { useContext } from "react";

import serverURLContext from "../contexts/url-context";
import '../UIkit/elements/search-bar.css'

let isBasic = true;

function SearchBar(props) {
    let { changeResultsArray } = props;
    const serverURL = useContext(serverURLContext);
    const searchPetPath = "/pets/search";

    const [searchType, setSearchType] = useState("basic")
    const [petTypeSearch, setPetTypeSearch] = useState("");
    const [petStatusSearch, setPetStatusSearch] = useState("");
    const [petHeightSearch, setPetHeightSearch] = useState("");
    const [petWeightSearch, setPetWeightSearch] = useState("");
    const [petNameSearch, setPetNameSearch] = useState("");


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

    async function searchFunction() {
        currentPetForSearch.type = petTypeSearch;
        currentPetForSearch.name = petNameSearch;
        currentPetForSearch.status = petStatusSearch;
        currentPetForSearch.height = petHeightSearch;
        currentPetForSearch.weight = petWeightSearch;
        currentPetForSearch.searchType = searchType;


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
            <button className="regular-button change" onClick={changeSearch}> change search type </button>

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
                className="regular-button inside-form"
                onClick={searchFunction}
                disabled={petTypeSearch.length === 0 && petStatusSearch.length === 0 && petHeightSearch.length === 0 && petWeightSearch.length === 0 && petNameSearch.length === 0}

            >Search</button>
        </div>
    )
}

export default SearchBar;