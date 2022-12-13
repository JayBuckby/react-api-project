import SearchBox from "../../components/SearchBox/SearchBox";
import "./NavBar.scss";
import FiltersList from "../../components/FiltersList/FiltersList";

// IN HERE WE WILL BE STORING OUR SEARCH BAR AS WELL AS THE OPTIONS TO FILTER BY
const NavBar = (props) => {
  const { setSearchTerm, setFilterChoice, filterChoice } = props;

  return (
    <div className="nav-bar">
      <h1>Punk API</h1>
      <h2>For all your drinking needs!</h2>
      <h4>Would you like to filter your options?</h4>
      <FiltersList
        setFilterChoice={setFilterChoice}
        filterChoice={filterChoice}
      />
      <h4>Or search for something?</h4>
      <SearchBox setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default NavBar;
