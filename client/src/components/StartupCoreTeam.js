import React from 'react';
import PropTypes from 'prop-types';


class StartupCoreTeam extends React.Component {
  constructor(props){
    super(props);
  }

  handle_change = e => {
    const name = e.target.id;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  handle_signup = (e) => {
    e.preventDefault();
    this.props.history.push({
      pathname: './signup-startup-financials',
    });
  }

  render() {
    return ( 
      <div class="bgImage">
      <div class="container-fluid core-team">
        <div class="login-form">
          <div class="main-div">
            <div class="panel">
              <img src={ require('../logo.png') } alt="logo" class="logo" class="img-responsive" />
            </div>
            <form id="SignUp" onSubmit={this.handle_signup}>
              <p><strong>Startups are all about teams. Please add members of your core team here to showcase the brains behind the company.</strong></p>
              
              <div class="container-fluid">
                <div class="row">
                    <div class="form-group name1 col-md-3">
                      <input type="text" class="form-control input-sm" id="Name" placeholder="Name"/>
                    </div>
                    <div class="form-group name2 col-md-3">
                      <input type="text" class="form-control input-sm" id="job_title" placeholder="Job Title"/>
                    </div>
                    <div class="form-group name2 col-md-3">
                      <input type="text" class="form-control input-sm" id="email" placeholder="Email Address"/>
                    </div>
                    <div class="form-group name2 col-md-3">
                      <input type="text" class="form-control input-sm" id="linkedin" placeholder="Linkedin Profile"/>
                    </div>
                </div>
              </div>

              <div class="container-fluid">
                <div class="row">
                    <div class="form-group name1 col-md-3">
                      <input type="text" class="form-control input-sm" id="Name" placeholder="Name"/>
                    </div>
                    <div class="form-group name2 col-md-3">
                      <input type="text" class="form-control input-sm" id="job_title" placeholder="Job Title"/>
                    </div>
                    <div class="form-group name2 col-md-3">
                      <input type="text" class="form-control input-sm" id="email" placeholder="Email Address"/>
                    </div>
                    <div class="form-group name2 col-md-3">
                      <input type="text" class="form-control input-sm" id="linkedin" placeholder="Linkedin Profile"/>
                    </div>
                </div>
              </div>

              <div class="container-fluid">
                <div class="row">
                    <div class="form-group name1 col-md-3">
                      <input type="text" class="form-control input-sm" id="Name" placeholder="Name"/>
                    </div>
                    <div class="form-group name2 col-md-3">
                      <input type="text" class="form-control input-sm" id="job_title" placeholder="Job Title"/>
                    </div>
                    <div class="form-group name2 col-md-3">
                      <input type="text" class="form-control input-sm" id="email" placeholder="Email Address"/>
                    </div>
                    <div class="form-group name2 col-md-3">
                      <input type="text" class="form-control input-sm" id="linkedin" placeholder="Linkedin Profile"/>
                    </div>
                </div>
              </div>
              
              <button type="submit" class="btn btn-primary">Continue</button>
            </form>
          </div>
        </div>
      </div>
      </div>


          );}
}

export default StartupCoreTeam;