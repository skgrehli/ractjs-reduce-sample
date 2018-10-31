import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props){
    super(props);
  }

  handleLogin = (event) => {
    event.preventDefault();
    console.log(this.props);
    this.props.history.push('/login');
  }
  
  render() {
    return (
      <div>
        <div class="header-title-wrap">
          <div class="container">
            <p>
              `This is our closed beta version for feedback collection and algorithm refinement. Post 50 
              validated signups, all startups will be added to a waitlist for our beta release. 
              Our beta is expected to launch in January, 2019 based on the features requested. 
              Please submit your feature requests through the contact form on the website. 
              Thank you for your support, we are a startup in service of the startup ecosystem!`
            </p>
          </div>
        </div>
        <nav class="navbar navbar-expand-md navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="/">
                <img src={ require('../logo.png') } alt="logo" class="logo" class="img-responsive" />
              </a>
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbarCollapseMenu">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span> 
              </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarCollapseMenu">
              <ul class="nav navbar-nav navbar-right">
                <li class="nav-item"><a class="nav-link" target="_blank" href="https://www.blockseedinvestments.com/">About</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Investors</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Startups</a></li>
                <li class="nav-item"><a class="nav-link" href="http://localhost:3000/login" /*onClick={this.handleLogin}*/><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
