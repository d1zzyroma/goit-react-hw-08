import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filter/filtersSlice";  // Import the correct action
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  
  const filter = useSelector((state) => state.filter.name);  // Access the filter state

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));  // Dispatch the changeFilter action
  };

  return (
    <div className={css.wrapper}>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={css.input}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
