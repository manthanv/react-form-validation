import Ract, { useState, useEffect } from 'react';

const FormHandler = () => {
  const initialFormValues = { username: '', email: '', password: '' };
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmited, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="App">
      <h1>Template drivan form validation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formValues.username}
          onChange={handleChange}
        />
        {errors.username && <h3>{errors.username}</h3>}

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formValues.email}
          onChange={handleChange}
        />
        {errors.email && <h3>{errors.email}</h3>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        {errors.password && <h3>{errors.password}</h3>}
        <input type="submit" value="Submit" className="submit" />
      </form>
    </div>
  );
};

export default FormHandler;
