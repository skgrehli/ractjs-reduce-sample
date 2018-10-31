import React from 'react';
import PropTypes from 'prop-types';


class SignUpFollowupForm extends React.Component {
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
      pathname: '/signup-startup-sector',
    });
  }

  render() {
    const { company_name } = this.props && this.props.location && this.props.location.state;
    return ( 
      <div class="bgImage">
      <div class="container">
        <div class="login-form">
          <div class="main-div">
            <div class="panel">
              <img src={ require('../logo.png') } alt="logo" class="logo" class="img-responsive" />
            </div>
            <form id="SignUp" onSubmit={this.handle_signup}>
              <p><strong>Please enter your company details  to build your online presence on the platform.</strong></p>
              <div class="form-group">
                <input type="text" class="form-control" id="company_name" value={company_name}/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="website_url" placeholder="Website URL" onChange={(e) => this.handle_change(e)}/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="linkedin" placeholder="Company Linkedin Profile" onChange={(e) => this.handle_change(e)}/>
              </div>
              <div class="form-group">
                <textarea class="form-control" class="form-control" id="company_description" placeholder="Company's short description" onChange={(e) => this.handle_change(e)}/>
              </div>
              <div class="form-group">
                <br />
                <p>Upload Company Logo</p>
                <input type="file" id="file-input" name="ImageStyle"/>
              </div>
              <div class="form-group">
                <div class="form-group">
                  <br />
                  <p>Is the company incorporated? </p>
                  <select class="form-control" id="userType" onChange={(e) => this.handle_change(e)}>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="date" placeholder="Incorporation Date" onChange={(e) => this.handle_change(e)}/>
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