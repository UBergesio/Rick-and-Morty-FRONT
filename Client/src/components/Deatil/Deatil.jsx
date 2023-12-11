import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import style from "./Detail.module.css";

const Deatil = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  

  // ! Esta funcion la puedo hacer mejor, la dejo abajo comentada.
  const renderizarPersonaje = (propertyName, propertyValue) => {
    if (propertyValue == null) {
      return null;
    }
    return (
      <div>
        <strong>{propertyName}: </strong>
        {propertyValue}
      </div>
    );
  };


  return (
    <div>
      <div className={style.containerTexto}>
        <h3 className={style.titulo}>{character.name}</h3>
        <h3 className={style.description}>{renderizarPersonaje("Status", character.status)}</h3>
        <h3 className={style.description}>{renderizarPersonaje("Species", character.species)}</h3>
        <h3 className={style.description}>{renderizarPersonaje("Gender", character.gender)}</h3>
        <h3 className={style.description}>{renderizarPersonaje("Origin", character.origin?.name)}</h3>
      </div>
      <img src={character.image} alt={character.name} className={style.img} />
    </div>
  );
};


/*  return (
    <div>
      {character.name && (
        <div>
          {character.name && <h1>Name: {character.name}</h1>}
          {character.image && (
            <img src={character.image} alt={character.name} />
          )}
          {character.status && <h2>Status: {character.status}</h2>}
          {character.species && <h2>Specie: {character.species}</h2>}
          {character.gender2 && <h2>Gender: {character.gender}</h2>}
          {character.origin?.name && character.origin.name === "unknown" ? (
            <h2>Origin: Humano</h2>
          ) : (
            <h2>Origin: {character.origin.name}</h2>
          )}
        </div>
      )}
    </div>
  );
}; */

export default Deatil;