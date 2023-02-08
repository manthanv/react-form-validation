import React from 'react';
import useForm from './../Hooks/useForm';

const FormValidation = () => {
  //Final submit function
  const formLogin = () => {
    console.log('Callback function when form is submitted!');
    console.log('Form Values ', values);
  };

  const { handleChangeEvent, values, errors, handleSubmit } =
    useForm(formLogin);

  return (
    <div className="App">
      <h1>Template drivan form validation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChangeEvent}
        />
        {errors.username && <h3>{errors.username}</h3>}

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChangeEvent}
        />
        {errors.email && <h3>{errors.email}</h3>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChangeEvent}
        />
        {errors.password && <h3>{errors.password}</h3>}
        <input type="submit" value="Submit" className="submit" />
      </form>
    </div>
  );
};

export default FormValidation;
