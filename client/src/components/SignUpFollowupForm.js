import React from 'react';
import PropTypes from 'prop-types';


class SignUpFollowupForm extends React.Component {
  constructor(props){
    super(props);
  }

  state = {
    username: '',
    designation: '',
    contact_number: '',
    linkedin: '',
    country: '',
    userType: 'Startup',
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

  handle_signup = (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.userType === "Startup") {
      this.props.history.push({
        pathname: '/signup-startup',
        state: {
          company_name: this.state.company_name,
        }
      });
    } else if (this.state.userType === "Investor/Advisor") {
      this.props.history.push({
        pathname: '/signup-investor'
      });
    }
  }

  render() {
    const { name } = this.props && this.props.location && this.props.location.state;
    return ( 
      <div class="bgImage">
      <div class="container-fluid">
        <div class="login-form">
          <div class="main-div">
            <div class="panel">
              <img src={ require('../logo.png') } alt="logo" class="logo" class="img-responsive" />
            </div>
            <form id="SignUp" onSubmit={this.handle_signup}>
              <p><strong>Welcome to Blockseed. Let’s get you on the platform starting with some basic details.</strong></p>
              <div class="form-group">
                <input type="text" class="form-control" id="username" value={name}/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="designation" placeholder="Designation" onChange={(e) => this.handle_change(e)}/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="company_name" placeholder="Company Name" onChange={(e) => this.handle_change(e)}/>
              </div>
              <div class="form-group">
                <input type="number" class="form-control" id="contact_number" placeholder="Contact Number" onChange={(e) => this.handle_change(e)}/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="linkedin" placeholder="Linkedin Profile" onChange={(e) => this.handle_change(e)}/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="country" placeholder="Country" onChange={(e) => this.handle_change(e)}/>
              </div>
              <div class="form-group">
                <div class="form-group">
                  <label>I am a/an </label>
                </div>
                <div class="form-group">
                  <select class="form-control" id="userType" onChange={(e) => this.handle_change(e)}>
                    <option>Startup</option>
                    <option>Investor/Advisor</option>
                    <option>Accelerator</option>
                    <option>Individual</option>
                  </select>
                </div>
              </div>
              <br /><br />
              <button type="submit" class="btn btn-primary">Continue</button>
            </form>
          </div>
        </div>
      </div>
      </div>


          );}
}

export default SignUpFollowupForm;