import { useState } from 'react';

const useForm = (callback) => {
  // TODO : Store form value
  const [values, setValues] = useState({});

  // TODO : Store errors
  const [errors, setErrors] = useState({});

  // TODO : Handle input error

  const handleChangeEvent = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;

    validate(event, inputName, inputValue);

    //Let's set these values in state
    setValues({ ...values, [inputName]: inputValue });
  };

  const validate = (event, name, value) => {
    switch (name) {
      case 'username':
        if (value.length <= 4) {
          // we will set error state
          setErrors({
            ...errors,
            username: 'Username atleast have 5 letters',
          });
        } else {
          if (errors.hasOwnProperty('username')) {
            delete errors.username;
            setErrors({ ...errors });
          }
        }
        break;
      case 'email':
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: 'Enter a valid email address',
          });
        } else {
          if (errors.hasOwnProperty('email')) {
            delete errors.email;
            setErrors({ ...errors });
          }
        }
        break;
      case 'password':
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          setErrors({
            ...errors,
            password:
              'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers',
          });
        } else {
          if (errors.hasOwnProperty('password')) {
            delete errors.password;
            setErrors({ ...errors });
          }
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      callback();
    } else {
      alert('There is an error');
    }
  };

  return { values, errors, handleChangeEvent, handleSubmit };
};

export default useForm;
