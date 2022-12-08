import "./SearchBox.scss";

// IN HERE WE WILL BE CREATING THE INPUT FOR THE SEARCHBOX AND HOW IT WILL BE STRUCTURED

import "./SearchBox.scss";

const SearchBox = (props) => {
  const { searchTerm, handleInput } = props;

  return (
    <input
      className="searchbox"
      type="text"
      value={searchTerm}
      onInput={handleInput}
    />
  );
};

export default SearchBox;
