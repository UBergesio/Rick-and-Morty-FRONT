import style from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = (props) => {
  const { onSearch } = props;
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="search"
        value={id}
        onChange={handleChange}
      />
      <button className={style.btn} onClick={() => onSearch(id)}>
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;
