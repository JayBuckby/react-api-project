import "./FiltersList.scss";
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = (props) => {
  const { setFilterChoice, filterChoice } = props;
  return (
    <div>
      <FilterItem
        text="High Alcohol"
        filterChoice={filterChoice}
        setFilterChoice={setFilterChoice}
      />
      <FilterItem
        text="Classic Range"
        filterChoice={filterChoice}
        setFilterChoice={setFilterChoice}
      />
      <FilterItem
        text="High Acidity"
        filterChoice={filterChoice}
        setFilterChoice={setFilterChoice}
      />
    </div>
  );
};

export default FiltersList;
