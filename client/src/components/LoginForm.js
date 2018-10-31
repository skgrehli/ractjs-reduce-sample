import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    logged_in: false,
  };

  handle_change = e => {
    const name = e.target.id;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handleLogin = (event) => {
    event.preventDefault();
    const data = {
      "username": this.state.username,
      "password": this.state.password,
    };
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          logged_user: json.user && json.user.username || null,
        });
      });
  };

  handleSignUp = (event) => {
    event.preventDefault();
    this.props.history.push('/signup');
  };

  render() {
    let submitDisabled = this.state.username.length < 1 || this.state.password.length < 1;
    if (this.state.logged_in && this.state.logged_user!== null) {
      return (<p>Welcome {this.state.logged_user}</p>);
    } else {
    return ( 
      <div class="bgImage">
      <div class="container">
        <div class="login-form">
          <div class="main-div">
            <div class="panel">
              <img src={ require('../logo.png') } alt="logo" class="logo" class="img-responsive" /> 
            </div>
            <form id="Login" onSubmit={this.handleLogin}>
              <p><strong>Sign in to your account</strong></p>
              <div class="form-group">
                <input type="username" class="form-control" id="username" placeholder="Email Address" onChange={(e) => this.handle_change(e)}/>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="password" placeholder="Password" onChange={(e) => this.handle_change(e)}/>
              </div>
              <div class="forgot">
                <a href="#">Forgot password?</a>
              </div>
              <button type="submit" class="btn btn-primary" disabled={submitDisabled}>Sign me in</button>
            </form>
            <div class="SignupLinkLogin">
              <p>Don't have an account yet? <a onClick={this.handleSignUp}>Create one now!</a></p>
            </div>
          </div>
        </div>
      </div>
      </div>

          );}
}
}
export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired
};