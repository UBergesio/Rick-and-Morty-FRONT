import { useState } from "react";
import style from "./Form.module.css"
import validate from "./validation";
import imagenCasa from "../../img/fondo_casa.jpg"

const Form = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password:"",
  });

  const [errors, setErrors] = useState({
  })

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
    setErrors(validate({ ...userData, [event.target.name]: event.target.value }));
  };

  const handleSummit = (event) => {
    event.preventDefault()
    props.login(userData)
  };
  


  return (
    <div className={style.content}>
      <h1 className={style.titulo}>Rick and Morty</h1>
      <img src={imagenCasa} alt="fondo casa" className={style.img} />
      <form action="">
        <label htmlFor="" className={style.label}>
          Email:
        </label>
        <br />
        <input
          type="text"
          value={userData.email}
          name="email"
          onChange={handleChange}
          className={style.inputs}
          placeholder="Escribe tu email..."
        />
        {errors.email && <p className={style.errors}>{errors.email}</p>}
        <br />
        <label htmlFor="" className={style.label}>
          Contraseña:
        </label>
        <br />
        <input
          type="password"
          value={userData.password}
          name="password"
          onChange={handleChange}
          className={style.inputs}
          placeholder="Escribe tu contraseña..."
        />
        {errors.password && <p className={style.errors}>{errors.password}</p>}
        <br />
        <button type="submit" onClick={handleSummit} className={style.botones}>
          Submit
        </button>
      </form>
    </div>
  );
};
 

export default Form;