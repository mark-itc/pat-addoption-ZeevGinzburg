function SearchBar(props) {
    const { searchType }  = props;

    return(
        <div className="search-bar">
        {(searchType == "basic") ? 
            <div> 
                <h2>basic search</h2>
                <input type="search" name="" placeholder="insert type of animal"></input>
            </div>
            : <div>
                <h2>advanced search</h2>
                   <label name="status" >Adoption Status</label>
                    <input type="search" name="status" placeholder="Adoption Status - Foster / Adopted / Waitnig to adoption.."></input>
                    <label name="height" >Pet's Height</label>
                    <input type="search" name="height" placeholder="Height in cm"></input>
                    <label name="weight" >Pet's Weight</label>
                    <input type="search" name="weight" placeholder="Weight in Kg"></input>
                    <label name="type" >Pet's Type</label>
                    <input type="search" name="type" placeholder="insert type of animal"></input>
                    <label name="name" >Pet's Name</label>
                    <input type="search" name="name" placeholder="Bobby.."></input>
                </div>
            }
            <button>Search</button>

      </div>

    )
}

export default SearchBar;