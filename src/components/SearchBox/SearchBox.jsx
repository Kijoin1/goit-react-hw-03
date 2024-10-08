import s from "./SearchBox.module.css";

const SearchBox = ({ searchData, handleChange }) => {
  return (
    <div className={s.search}>
      <label>Find contacts by name</label>
      <input type="text" value={searchData} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
