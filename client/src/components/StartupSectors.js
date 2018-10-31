import React from 'react';
import PropTypes from 'prop-types';


class SignUpInvestorForm extends React.Component {
  constructor(props){
    super(props);
  }

  handle_signup = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.history.push({
      pathname: '/signup-startup-core-team'
    });
  }

  handle_check = () => {
  	
  }

  render() {
    return ( 
      <div class="bgImage">
      <div class="container">
        <div class="login-form">
          <div class="main-div">
            <div class="panel">
              <img src={ require('../logo.png') } alt="logo" class="logo" class="img-responsive" />
              <br />
              <p><strong>Please select your preferred sectors and industries so that we can match you with relevant startups. This will help us in refining our algorithm for providing you with a curated deal flow.</strong></p>
              <div class="well">
              <p>Please select your preferred sectors (maximum of 3):</p>
              <label class="checkbox-inline"><input type="checkbox" value="" />Agriculture & Mining</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Business Services</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Consumer Services</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Consumer Goods</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />E-commerce</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Education</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Energy & Utilities</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Financial Services</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Government</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Healthcare</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Logistics</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Manufacturing</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Media & Entertainment</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Non-profit</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Real Estate</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Retail</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Software & Internet</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Telecommunications</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Travel & Tourism</label>
              </div>
              <br /><br />
              <div class="well">
              <p>Please select your preferred industries (maximum of 3):</p>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Advertising</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Aerospace</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Agriculture</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Artificial Intelligence</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Analytics</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Animation</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>AR/VR</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Architecture</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Art and Photography</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Automotive</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Big Data</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Blockchain</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Communication</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Construction</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Defence</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Design</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Education Technology</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Electronics</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Entreprise Solutions</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Events</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Fashion</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Food & Beverages</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Gaming</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Green Technology</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Grocery</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Hardware</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Humar Resources</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Information Technology</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Internet of things</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Legal</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Marketing</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Nanotechnology</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Personal Care</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Pets & Animals</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Print Media</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Robotics</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Security</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Social Impact</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Social Network</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Sports</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Storage</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Transportation</label>
              <label class="checkbox-inline"><input type="checkbox" value="" onClick={this.handle_check}/>Wholesale & Distribution</label>
              </div>
              <br /> <br />
              <button type="submit" class="btn btn-primary" onClick={this.handle_signup}>Continue</button>
            </div>
          </div>
        </div>
      </div>
      </div>


          );}
}

export default SignUpInvestorForm;