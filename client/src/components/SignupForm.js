import React from 'react';
import PropTypes from 'prop-types';
import SignUpFollowupForm from './SignUpFollowupForm';
import '../App.css';

class SignupForm extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
    isChecked: false,
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

  handle_check = () => {
    this.setState({isChecked: !this.state.isChecked});
  }

  handle_signup = (e) => {
    e.preventDefault();
    const data = {
      username: this.state.email,
      email: this.state.email,
      password: this.state.password,
    };
    fetch('http://localhost:8000/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        if (json.username && json.username[0] === "A user with that username already exists.") {
          alert("Email already exists");
        } else if (json.email && json.email[0] === "Enter a valid email address.") {
          alert("invalid email");
        } else {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
        this.props.history.push({
        pathname: '/signup-next',
        state: { name: this.state.username }
      });
      }
      });
      //this.props.history.push('/signup-next');
  };


  render() {
    console.log(this.state);
    let submitDisable = !(this.state.password === this.state.repeatPassword) || !this.state.isChecked || this.state.password==="" || this.state.username ==="" || this.state.email==="";
    console.log(submitDisable);
    if (this.state.logged_in) {
      return <p>User Logged in = {this.state.username}</p>
    } else {
    return ( 
      <div class="bgImage">
      <div class="container">
        <div class="login-form">
          <div class="main-div">
            <div class="panel">
              <img src={ require('../logo.png') } alt="logo" class="logo" class="img-responsive" />
            </div>
            <form id="SignUp" onSubmit={this.handle_signup}>
              <div class="form-group">
                <input type="name" class="form-control" id="username" placeholder="Full Name" onChange={(e) => this.handle_change(e)}/>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" id="email" placeholder="Email Address" onChange={(e) => this.handle_change(e)}/>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="password" placeholder="Password" onChange={(e) => this.handle_change(e)}/>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="repeatPassword" placeholder="Repeat Password" onChange={(e) => this.handle_change(e)}/>
              </div>
              <input type="checkbox" value="" onClick={this.handle_check}/> By joining BlockSeed Investments, I am agreeing to BlockSeed Investment’s <a>Terms of Use</a> and <a>Privacy Policy</a> 
              <br /><br />
              <button type="submit" class="btn btn-primary" disabled={submitDisable}>Sign me in</button>
            </form>
          </div>
        </div>
      </div></div>


          );}
  }
}

export default SignupForm;