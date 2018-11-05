import React, { Component } from 'react';
import '../SignInForm.css';


/* TODO : 
1. Implement redux
2. Correct email validation & call api to reset  password which sends an email with link
3. Move validateEmail to utils
*/

class ForgotPassword extends Component {
  state = {
    email: '',
    emailError: [],
    emailSent: false,
  };

  validateEmail = (Email) => {
    let reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    if(!Email.match(reEmail)) {
      this.setState(prevState => ({
        emailError: [...prevState.emailError, "You have entered an invalid email address!"]
      }));
      return false;
    } else {
      return true;
    }
  }

  handle_change = e => {
    const value = e.target.value;
    this.setState({email: value, emailError: []});
  };

  handle_submit = (e) => {
    e.preventDefault();
    let emailValidator = this.validateEmail(this.state.email);
    if (emailValidator) {
      //call api
      this.setState({ emailSent: true });
      console.log();
    }
  }

	render() {
    let disabled = this.state.email.length < 1;
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
            {!this.state.emailSent && 
              <div class="row">
                <form id="Login" onSubmit={this.handle_submit}>
                	<div class="row">
                    <p><strong>Reset your password</strong></p>
                  </div>
                  <div class="row">
                    <div class="form-group">
                      <input type="email" class="form-control" id="email" placeholder="Email Address" onChange={(e) => this.handle_change(e)} />
                      {this.state.emailError.length>0 && this.state.emailError.map(function(error, index){
                      return <span class="error text-danger"><small>{error}</small></span>;
                    })}
                    </div>
                  </div>
                  <div class="row">
                    <button type="submit" class="btn btn-primary" disabled={disabled}>Reset Password</button>
                	</div>
                </form>
              </div>
            } 
            {this.state.emailSent &&
              <div class="row" id="email-sent-forgot-password">
                <p><strong>Password reset email sent to <br/>{this.state.email}</strong></p>
              </div>
            }
          </div>
        </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ForgotPassword;
