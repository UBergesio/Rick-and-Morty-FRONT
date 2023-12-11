
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexEmailMax = /^[a-zA-Z0-9._%+-]{1,35}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPassword = /^(?=.*[0-9]).+$/;
const regexPasswordMax = /^.{6,10}$/;

const validate = (userData) => {
  const errors = {}
  if (!userData.email) {
    errors.email = "*Se requiere un email.";
  }
  else if (!regexEmail.test(userData.email)) {
    errors.email = "*Email invalido.";
  }
  else if (!regexEmailMax.test(userData.email)) {
    errors.email = "*Debe contener menos de 35 caracteres.";
  }
  if (!regexPassword.test(userData.password)) {
    errors.password = "*Debe contener al menos 1 número.";
  }
  else if (!regexPasswordMax.test(userData.password)) {
    errors.password = "*Debe contener entre 6 y 10 caracteres."
  }
  
  return errors
};

export default validate;