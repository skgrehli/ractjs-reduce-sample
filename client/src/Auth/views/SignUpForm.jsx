import React, { Component } from 'react';
import '../SignInForm.css';
import { connect } from 'react-redux';

import { signUp } from '../Auth.action'

/* TODO : 
1. Implement Redux
2. OnSubmit => Render TypeForm equivalent with props passed down.
*/

class SignUpForm extends Component {
  state = {
    first_name: '',
    last_name: '',
    //username: '',
    email: '',
    password: '',
    passwordRepeat: '',
    tnc: false,
    emailError: '',
  };

  handle_change = e => {
    const name = e.target.id;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      newState['emailError'] = '';
      return newState;
    });
  };

  handle_tnc = e => {
    this.setState({
      tnc: !this.state.tnc,
    });
  };

  validateEmail = (Email) => {
    let reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    if (!Email.match(reEmail)) {
      this.setState(prevState => ({
        emailError: [...prevState.emailError, "You have entered an invalid email address!"]
      }));
      return false;
    } else {
      return true;
    }
  }

  handle_signup = (e) => {
    e.preventDefault();
    let emailValidator = this.validateEmail(this.state.email);
    if (emailValidator) {
      const data = {
        //username: this.state.email,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
      };

      this.props.signUp(data);
    }
  };

  render() {
    let disabled = this.state.first_name.length < 1 || this.state.last_name.length < 1 || this.state.email.length < 1 || this.state.password.length < 8 || this.state.password !== this.state.passwordRepeat || !this.state.tnc;
    return (
      <div class="bgImage container-fluid">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="login-form">
                <div class="main-div container-fluid" id="signup">
                  <div class="panel">
                    <img src={require('../../assets/logo/logo.png')} alt="logo" class="img-responsive" />
                  </div>
                  <form id="Login" onSubmit={this.handle_signup}>
                    <div class="row">
                      <p><strong>Create your account</strong></p>
                    </div>
                    <div class="row">
                      <div class="form-group">
                        <input type="first_name" class="form-control" id="first_name" placeholder="First Name" onChange={(e) => this.handle_change(e)} />
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group">
                        <input type="last_name" class="form-control" id="last_name" placeholder="Last Name" onChange={(e) => this.handle_change(e)} />
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group {this.state.emailError ==='' ? '' : has-error}">
                        <input type="email" class="form-control" id="email" placeholder="Email Address" onChange={(e) => this.handle_change(e)} />
                        {this.state.emailError && <span class="error text-danger"><small>{this.state.emailError}</small></span>}
                      </div>

                    </div>
                    <div class="row">
                      <div class="form-group">
                        <input type="password" class="form-control" id="password" placeholder="Password" onChange={(e) => this.handle_change(e)} />
                        <small class="help-block" id="passwordHelpText">Minimum 8 characters</small>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group">
                        <input type="password" class="form-control" id="passwordRepeat" placeholder="Repeat Password" onChange={(e) => this.handle_change(e)} />
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group">
                        <input type="checkbox" value="" id="tnc" onClick={(e) => this.handle_tnc(e)} /> By joining BlockSeed Investments, I am agreeing to BlockSeed Investment’s <a>Terms of Use</a> and <a>Privacy Policy</a>
                      </div>
                    </div>
                    <div class="row">
                      <button type="submit" class="btn btn-primary" disabled={disabled}>Sign me in</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user
});

const mapsDispatchToProps = dispatch => {
  return {
    signUp: (values) => dispatch(signUp(values))
  }
}

export default connect(mapStateToProps, mapsDispatchToProps)(SignUpForm);