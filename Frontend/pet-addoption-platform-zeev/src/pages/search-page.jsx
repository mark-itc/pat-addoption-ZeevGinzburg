import Navbar from "../components/navbar";

function SearchPage() {
    return(
        
        <div className="search-page-temp">
                <Navbar/>
          <div className="search-bar">
            basic search / advanced search
            <h2>basic search</h2>
            <input type="search" name="" placeholder="insert type of animal"></input> Search bar...
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
            
            <button>Search</button>
          </div>
          <div className="search-results">
            <ul>
              <li>* 1st result of search..*</li>
              <li>* 2nd result of search..*</li>
            </ul>
          </div>
          
        </div>


    );
}

export default SearchPage;