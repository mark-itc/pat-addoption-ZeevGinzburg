import Navbar from "../components/navbar";
import SearchBar from "../components/search-bar";

function SearchPage() {
  let searchType = "basic";
    return(
        
        <div className="search-page-temp">
                <Navbar/>
                <SearchBar searchType={searchType}/>
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