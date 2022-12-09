import "./SearchBox.scss";

// IN HERE WE WILL BE CREATING THE INPUT FOR THE SEARCHBOX AND HOW IT WILL BE STRUCTURED

const SearchBox = (props) => {
  const { setSearchTerm } = props;
  const handleInput = (event) => {
    const userSearch = event.target.value.toLowerCase();
    setSearchTerm(userSearch);
  };

  return <input className="searchbox" type="text" onInput={handleInput} />;
};
export default SearchBox;
