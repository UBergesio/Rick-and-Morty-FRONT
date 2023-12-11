import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { filterCards, orderCards } from "../redux/actions";
import { useDispatch } from "react-redux";

const Favorites = (props) => {
  const { myFavorites } = props;
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <select name="" id="" onChange={handleOrder}>
        <option value="A">Asendente</option>
        <option value="D">Desendente</option>
      </select>
      <select name="" id="" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <h1 className={style.titulo}>Mis personajes favoritos</h1>
      <div className={style.container}>
        {myFavorites.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            image={character.image}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            onClose={props.onClose}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
