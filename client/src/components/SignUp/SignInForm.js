import React, { Component } from 'react';
import './SignInForm.css';


/* TODO : 
1. Add Redux implementation
*/

class SignInForm extends Component {
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

  handle_change = e => {
    const name = e.target.id;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      if (name === 'email') {
        newState['errors'] = [];
      }
      return newState;
    });
  };

  handle_login = (event) => {
    event.preventDefault();
    let emailValidator = this.validateEmail(this.state.email);
    if (emailValidator) {
      const data = {
        "username": this.state.email,
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
          if (json && json.non_field_errors) {
            this.setState({errors: json.non_field_errors});
          }
        });
      }
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
                    <input type="email" class="form-control" id="email" placeholder="Email Address" onChange={(e) => this.handle_change(e)} />
                  </div>
                </div>
                <div class="row">
                  <div class="form-group">
                    <input type="password" class="form-control" id="password" placeholder="Password" onChange={(e) => this.handle_change(e)} />
                    {this.state.errors.length>0 && this.state.errors.map(function(error, index){
                    return <span class="error text-danger"><small>{error}</small></span>;
                  })}
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

export default SignInForm;
