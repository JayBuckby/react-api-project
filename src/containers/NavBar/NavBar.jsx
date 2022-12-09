import SearchBox from "../../components/SearchBox/SearchBox";
import "./NavBar.scss";

// IN HERE WE WILL BE STORING OUR SEARCH BAR AS WELL AS THE OPTIONS TO FILTER BY
const NavBar = (props) => {
  const { setSearchTerm } = props;

  return (
    <div>
      <SearchBox setSearchTerm={setSearchTerm} />
    </div>
  );
};

export default NavBar;
