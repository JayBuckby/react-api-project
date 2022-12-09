import SearchBox from "../../components/SearchBox/SearchBox";
import "./NavBar.scss";
import FiltersList from "../../components/FiltersList/FiltersList";

// IN HERE WE WILL BE STORING OUR SEARCH BAR AS WELL AS THE OPTIONS TO FILTER BY
const NavBar = (props) => {
  const { setSearchTerm, setFilterChoice, filterChoice } = props;

  return (
    <div>
      <SearchBox setSearchTerm={setSearchTerm} />
      <FiltersList
        setFilterChoice={setFilterChoice}
        filterChoice={filterChoice}
      />
    </div>
  );
};

export default NavBar;
