import React from 'react';

export default class ClassBaseFormValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
      errors: {},
    };
  }

  handleChanghandleChangeEvent = (event) => {};

  handleSubmit = () => {};

  render() {
    <div className="App">
      <h1>Template drivan form validation</h1>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={this.handleChangeEvent}
        />
        {this.state.errors.username && <h3>{this.state.errors.username}</h3>}

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={this.handleChangeEvent}
        />
        {this.state.errors.email && <h3>{this.state.errors.email}</h3>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChangeEvent}
        />
        {this.state.errors.password && <h3>{this.state.errors.password}</h3>}
        <input type="submit" value="Submit" className="submit" />
      </form>
    </div>;
  }
}
