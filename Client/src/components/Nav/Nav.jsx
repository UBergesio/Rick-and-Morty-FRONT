import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";
import style from "./Nav.module.css";


const Nav = (props) => {
  const { onSearch, closeSession } = props;


  const location = useLocation();
  const rutaSelect = location.pathname === "/";
  if (rutaSelect) return null;

  return (
    <div className={style.container}>
      <Link to="/about">
        <button className={style.botones}>About</button>
      </Link>
      <Link to="/Home">
        <button className={style.botones}>Home</button>
      </Link>
      <Link to="/favorites">
        <button className={style.botones}>Favorites</button>
      </Link>
      <button className={style.botones} onClick={closeSession}>
        LogOut
      </button>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}


export default Nav;