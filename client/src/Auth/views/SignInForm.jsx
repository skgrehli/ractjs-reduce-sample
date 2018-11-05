import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../Auth.action'
import '../SignInForm.css';


/* TODO : 
1. Add Redux implementation
*/

class SignInForm extends Component {
  constructor (props) {
    super(props);
  }
  state = {
    email: '',
    password: '',
    errors: [],
  };

  validateEmail = (Email) => {
    let reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    if(!Email.match(reEmail)) {
      this.setState(prevState => ({
        errors: [...prevState.errors, "You have entered an invalid email address!"]
      }));
      return false;
    } else {
      return true;
    }
  }

  handle_change = (e, stateName) => {
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[stateName] = value;
      if (stateName === 'email') {
        this.validateEmail(this.state.email);
        newState['errors'] = [];
      }
      return newState;
    });
  };

  handle_login = (event) => {
    event.preventDefault();
    const values = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(values);
  };

	render() {
    let disabled = this.state.email.length < 1 || this.state.password.length < 8;
    return ( 
      <div class="bgImage container-fluid">
      <div class="container">
        <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="login-form">
          <div class="main-div container-fluid">
            <div class="panel">
              <img src={ require('../../assets/logo/logo.png') } alt="logo" class="img-responsive"/>
            </div>
            <div class="row">
              <form id="Login" onSubmit={this.handle_login}>
              	<div class="row">
                  <p><strong>Sign in to your account</strong></p>
                </div>
                <div class="row">
                  <div class="form-group">
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      value= {this.state.email}
                      placeholder="Email Address" 
                      onChange={(e) => this.handle_change(e, "email")} 
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group">
                    <input 
                      type="password" 
                      class="form-control" 
                      id="password" 
                      placeholder="Password" 
                      onChange={(e) => this.handle_change(e, "password")} 
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="forgot">
                    <a href="/forgot-password">Forgot password?</a>
                  </div>
                </div>
                <div class="row">
                  <button type="submit" class="btn btn-primary" disabled={disabled}>Sign me in</button>
              	</div>
              </form>
            </div>  
          </div>
          <div class="SignupLinkLogin container-fluid">
            <p>Don't have an account yet? <a href="http://localhost:3000/signup">Create one now!</a></p>
          </div>
        </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

const mapsDispatchToProps = dispatch => {
  return {
    login : (values) => dispatch(login(values))
  }
}

export default connect(null, mapsDispatchToProps)(SignInForm);
