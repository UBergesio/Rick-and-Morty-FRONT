import axios from 'axios';
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";


export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
/*     axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    }); */
        try {
          const response = await axios.post(endpoint, character);
          const { data } = response;
          return dispatch({
            type: ADD_FAV,
            payload: data,
          });
        } catch (error) {
          window.alert(error.message);
        }
  };
};
 
export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    /* axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    }); */
    try {
      const response = await axios.delete(endpoint);
      const { data } = response;
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
    }
  };
};

export const filterCards = (gender) => {
  return{type: FILTER, payload: gender}
};
 
export const orderCards = (orden = "A") => {
  return{type: ORDER, payload: orden}
};
