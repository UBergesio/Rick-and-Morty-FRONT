import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
/* import { useState, useEffect } from "react";
 */
export default function Card(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  // Utiliza el estado local para determinar si el personaje es un favorito
  const isFav = myFavorites.some((fav) => fav.id === props.id);

  const handleFavorite = () => {
    // No necesitas verificar si isFav es true o false, simplemente cambia su valor
    if (isFav) {
      dispatch(removeFav(props.id));
    } else {
      dispatch(addFav(props));
    }
  };

  return (
    <div className={style.container}>
      {/* Utiliza el valor de isFav para mostrar el botón correcto */}
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
      <button className={style.btn} onClick={() => props.onClose(props.id)}>
        X X
      </button>
      <hr className={style.hr} />
      <img className={style.image} src={props.image} alt="" />
      <Link to={`/detail/${props.id}`}>
        <h2 className={style.nombres}>{props.name}</h2>
      </Link>
      <hr className={style.hr} />
      <h2 className={style.description}>{props.status}</h2>
      <h2 className={style.description}>{props.species}</h2>
      <h2 className={style.description}>{props.gender}</h2>
      <h2 className={style.descriptionOrigin}>{props.origin}</h2>
      <hr className={style.hr} />
    </div>
  );
}

/* const mapDispatchToProps = (props) => {
  const addToFavorite = () => {
    dispatch(ADD_FAV(props))
    return { addToFavorite: addToFavorite }
  };
  const removeTofavorite = () => {
    dispatch(REMOVE_FAV(props));
    return {removeTofavorite: removeTofavorite}
  }
  
};
 export {mapDispatchToProps}
 */
