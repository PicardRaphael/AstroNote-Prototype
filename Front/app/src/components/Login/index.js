import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import './style.scss';

class Login extends React.Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  };

  handleChange = (evt) => {
    const { changeInput } = this.props.actions;
    const { id, value } = evt.target;
    changeInput(id, value);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { actions, email, password } = this.props;
    const { signIn } = actions;
    if (email.length !== 0 && password.length !== 0) {
      signIn();
    }
  };

  render() {
    const { email, password } = this.props;
    return (
      <form className="form">
        <input
          className="form-input"
          value={email}
          onChange={this.handleChange}
          id="email"
          placeholder="Email"
        />
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={this.handleChange}
          id="password"
          placeholder="Password"
        />
        <button
          className="form-button"
          type="submit"
          onClick={this.handleSubmit}
        >
          Login
        </button>
      </form>
    );
  }
}

/**
 * Export
 */
export default Login;
