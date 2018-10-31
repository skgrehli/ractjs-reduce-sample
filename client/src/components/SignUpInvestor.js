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
      pathname: '/signup-investor-investments'
    });
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
              <label class="checkbox-inline"><input type="checkbox" value="" />Advertising</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Aerospace</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Agriculture</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Artificial Intelligence</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Analytics</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Animation</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />AR/VR</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Architecture</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Art and Photography</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Automotive</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Big Data</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Blockchain</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Communication</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Construction</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Defence</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Design</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Education Technology</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Electronics</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Entreprise Solutions</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Events</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Fashion</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Food & Beverages</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Gaming</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Green Technology</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Grocery</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Hardware</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Humar Resources</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Information Technology</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Internet of things</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Legal</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Marketing</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Nanotechnology</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Personal Care</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Pets & Animals</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Print Media</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Robotics</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Security</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Social Impact</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Social Network</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Sports</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Storage</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Transportation</label>
              <label class="checkbox-inline"><input type="checkbox" value="" />Wholesale & Distribution</label>
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