import React, { Component } from 'react';
import './SignInForm.css';


/* TODO : 
1. Implement redux
*/

class ResetPassword extends Component {

  state = {
    password: '',
    passwordRepeat: '',
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

  handle_reset = (e) => {
    e.preventDefault();
    // call api and reset given password
  }

	render() {
    let disabled = this.state.password.length < 8 || this.state.password !== this.state.passwordRepeat;
    return ( 
      <div class="bgImage container-fluid">
      <div class="container">
        <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="login-form">
          <div class="main-div-forgot-password container-fluid">
            <div class="panel">
              <img src={ require('../../assets/logo/logo.png') } alt="logo" class="img-responsive"/>
            </div>
            <div class="row">
              <form id="Login" onSubmit={this.handle_reset}>
              	<div class="row">
                  <p><strong>Reset your password</strong></p>
                </div>
                <div class="row">
                <div class="form-group">
                  <input type="password" class="form-control" id="password" placeholder="Password" onChange={(e) => this.handle_change(e)}/>
                  <small class="help-block" id="passwordHelpText">Minimum 8 characters</small>
                </div>
              </div>
              <div class="row">
                <div class="form-group">
                  <input type="password" class="form-control" id="passwordRepeat" placeholder="Repeat Password" onChange={(e) => this.handle_change(e)}/>
                </div>
              </div>
              <div class="row">
                <button type="submit" class="btn btn-primary" disabled={disabled}>Set Password</button>
            	</div>
              </form>
            </div>  
          </div>
        </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ResetPassword;
