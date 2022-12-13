import "./FilterItem.scss";

const FilterItem = (props) => {
  const { text, setFilterChoice, filterChoice } = props;

  const handleClick = () => {
    if (filterChoice == text) {
      setFilterChoice("");
    } else {
      setFilterChoice(text);
    }
  };

  return (
    <div>
      <input type="checkbox" onChange={handleClick} name={text} />
      <label htmlFor={text}>{text}</label>
    </div>
  );
};

export default FilterItem;
