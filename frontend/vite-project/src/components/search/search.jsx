import "./search.css";
import logoW from "../../assets/logoW.png";
import { AiOutlineSearch } from "react-icons/ai";

function Search() {
  return (
    <div className="search">
      <div className="searchDiv">
        <div className="pageLogoW">
          <img src={logoW} alt="" />
        </div>
        <div className="search-bar2">
          <input
            type="text"
            placeholder="Lookup a brand"
            // value={query}
            // onChange={handleInputChange}
          />
          <div className="searchIcon2">
            <AiOutlineSearch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
