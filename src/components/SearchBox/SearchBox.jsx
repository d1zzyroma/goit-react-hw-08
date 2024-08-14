import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice"; 
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  
  const filter = useSelector((state) => state.filter.name);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
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
