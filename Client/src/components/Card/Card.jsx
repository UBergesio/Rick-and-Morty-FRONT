import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Card(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const [isFav, setFav] = useState(false);
  const handleFavorite = () => {
    if (isFav === true) {
      setFav(false);
      dispatch(removeFav(props.id));
    } else if (isFav === false) {
      setFav(true);
      dispatch(addFav(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setFav(true);
      }
    });
  }, [myFavorites, props.id]);

  return (
    <div className={style.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button className={style.btn} onClick={() => props.onClose(props.id)}>
        X
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
